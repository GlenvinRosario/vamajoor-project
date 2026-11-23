import { useState, useMemo } from "react";
import {
  Copy,
  Heart,
  ShieldCheck,
  BadgeCheck,
  HandHeart,
  User,
  Building2,
  CheckCircle2,
  AlertCircle,
  Lock,
  ArrowRight,
  ArrowLeft,
  Download,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

// Replace with your EmailJS credentials (same as Contact page)
const EMAILJS_SERVICE_ID = "service_dharma";
const EMAILJS_TEMPLATE_ID = "template_69jkvd5";
const EMAILJS_PUBLIC_KEY = "riYQKk2AcIbbjf5EY";

const bankDetails = [
  { label: "Account Name", value: "Dharma Jyothi Charitable Trust" },
  { label: "Bank Name", value: "State Bank of India" },
  { label: "Account Number", value: "123456789012" },
  { label: "IFSC Code", value: "SBIN0001234" },
  { label: "Branch", value: "Bangalore Main Branch" },
  { label: "UPI ID", value: "dharmajyothi@upi" },
];
type DonorType = "individual" | "organization";

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  pan: string;
  address: string;
  organizationName: string;
  amount: string;
  captchaAnswer: string;
}

const ORG_ENTITY_LABELS: Record<string, string> = {
  C: "Company",
  T: "Trust",
  F: "Firm / LLP",
  A: "Association of Persons (AOP)",
  B: "Body of Individuals (BOI)",
  G: "Government Agency",
  J: "Artificial Juridical Person",
  L: "Local Authority",
  H: "Hindu Undivided Family (HUF)",
};

// All-India safe PAN validation (Official 10-char format + 4th-char holder type + never-issued '0000' check)
function validateIndianPAN(
  pan: string,
  donorType: DonorType
): { error: string | null; badge: string | null } {
  const cleaned = pan.trim().toUpperCase();
  if (!cleaned) {
    return { error: "PAN number is required for 80G receipt", badge: null };
  }

  // 1. Official Income Tax 10-character structure (5 letters + 4 digits + 1 letter)
  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(cleaned)) {
    return {
      error: "Invalid PAN format (must be 5 letters, 4 digits, 1 letter)",
      badge: null,
    };
  }

  // 2. Block '0000' (never issued by Income Tax Dept) and known placeholder test PANs
  const digits = cleaned.slice(5, 9);
  const blockedDummyPans = [
    "ABCDE1234F",
    "AAAAA0000A",
    "AAAAA1111A",
    "ZZZZZ9999Z",
    "QWERT1234Y",
  ];

  if (blockedDummyPans.includes(cleaned) || digits === "0000") {
    return {
      error: "Please enter a valid issued PAN card number",
      badge: null,
    };
  }

  // 3. 4th character: Universal All-India Holder / Entity Type check
  const fourthChar = cleaned.charAt(3);
  if (donorType === "individual" && fourthChar !== "P") {
    return {
      error:
        "Individual PAN must have 'P' as the 4th character (e.g., ETHPR1679K)",
      badge: null,
    };
  }
  if (donorType === "organization" && !ORG_ENTITY_LABELS[fourthChar]) {
    return {
      error:
        "Organization PAN 4th character must be C, T, F, A, B, G, J, L, or H",
      badge: null,
    };
  }

  return {
    error: null,
    badge:
      donorType === "individual"
        ? "Valid Individual PAN Format"
        : `Valid ${ORG_ENTITY_LABELS[fourthChar]} PAN Format`,
  };
}
export default function Donations() {
  const [donorType, setDonorType] = useState<DonorType>("individual");
  const [step, setStep] = useState<"form" | "bank">("form");
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Randomized math challenge
  const [captcha] = useState(() => {
    const a = Math.floor(Math.random() * 15) + 4;
    const b = Math.floor(Math.random() * 40) + 12;
    const wrongOffset = Math.floor(Math.random() * 15) + 5;
    const options =
      Math.random() > 0.5
        ? [a + b, a + b + wrongOffset]
        : [a + b + wrongOffset, a + b];
    return { a, b, answer: a + b, options };
  });

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    pan: "",
    address: "",
    organizationName: "",
    amount: "",
    captchaAnswer: "",
  });

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: field === "pan" ? value.toUpperCase() : value,
    }));
  };

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const panValidation = useMemo(
    () => validateIndianPAN(form.pan, donorType),
    [form.pan, donorType]
  );

  const errors = useMemo(() => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    // Allows letters, dots, apostrophes (e.g., D'Souza), and hyphens across all Indian regions
    if (!/^[A-Za-z.'’\-\s]{2,}$/.test(form.firstName.trim())) {
      errs.firstName = "Enter a valid first name";
    }
    if (!/^[A-Za-z.'’\-\s]{1,}$/.test(form.lastName.trim())) {
      errs.lastName = "Enter a valid last name or initial";
    }

    // Valid Indian mobile numbers (starts with 6-9, 10 digits, blocks fake repeated sequences)
    const cleanPhone = form.phone.replace(/\s+/g, "");
    const fakePhones = [
      "9876543210",
      "9999999999",
      "8888888888",
      "7777777777",
      "6666666666",
    ];
    if (
      !/^[6-9]\d{9}$/.test(cleanPhone) ||
      fakePhones.includes(cleanPhone) ||
      /^(\d)\1{9}$/.test(cleanPhone)
    ) {
      errs.phone = "Enter a valid 10-digit Indian mobile number";
    }

    // Valid email check (blocks disposable/test domains)
    const cleanEmail = form.email.trim().toLowerCase();
    const blockedDomains = [
      "test.com",
      "example.com",
      "mailinator.com",
      "tempmail.com",
      "yopmail.com",
    ];
    const emailDomain = cleanEmail.split("@")[1] || "";
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail) ||
      blockedDomains.includes(emailDomain)
    ) {
      errs.email = "Enter a valid email ID for 80G receipt";
    }

    if (panValidation.error) errs.pan = panValidation.error;

    if (!form.address.trim() || form.address.trim().length < 10) {
      errs.address =
        donorType === "organization"
          ? "Enter the organization's complete registered address"
          : "Enter your complete postal address with city & PIN";
    }

    if (
      donorType === "organization" &&
      (!form.organizationName.trim() || form.organizationName.trim().length < 3)
    ) {
      errs.organizationName = "Registered organization name is required";
    }

    const numAmount = Number(form.amount);
    if (!form.amount || isNaN(numAmount) || numAmount < 100) {
      errs.amount = "Minimum donation amount is ₹100";
    }

    if (Number(form.captchaAnswer) !== captcha.answer) {
      errs.captchaAnswer = "Select the correct answer";
    }

    return errs;
  }, [form, donorType, captcha.answer, panValidation.error]);

  const isFormValid = Object.keys(errors).length === 0;

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };
  const buildExcelCsvContent = () => {
    const headers = [
      "Date",
      "Donor Category",
      "Organization Name",
      "First Name",
      "Last Name",
      "Phone Number",
      "Email ID",
      "PAN Number",
      "Address",
      "Donation Amount (INR)",
    ];
    const row = [
      new Date().toLocaleDateString("en-IN"),
      donorType === "individual"
        ? "Indian Citizen / NRI"
        : "Organization Registered in India",
      donorType === "organization" ? form.organizationName.trim() : "N/A",
      form.firstName.trim(),
      form.lastName.trim(),
      form.phone.trim(),
      form.email.trim(),
      form.pan.trim().toUpperCase(),
      `"${form.address.trim().replace(/"/g, '""')}"`,
      form.amount,
    ];
    return `${headers.join(",")}\n${row.join(",")}`;
  };

  const downloadDonorExcelCsv = () => {
    const csv = buildExcelCsvContent();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `80G_Donor_${form.firstName.trim()}_${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Donor details Excel/CSV downloaded");
  };

  const handleProceedToBank = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setTouched({
        firstName: true,
        lastName: true,
        phone: true,
        email: true,
        pan: true,
        address: true,
        organizationName: true,
        amount: true,
        captchaAnswer: true,
      });
      toast.error("Please fill all mandatory fields accurately");
      return;
    }

    setSubmitting(true);

    const formattedSummary = [
      `80G DONOR REGISTRATION DETAILS`,
      `----------------------------------------`,
      `Category: ${
        donorType === "individual"
          ? "Indian Citizen / NRI"
          : "Organization Registered in India"
      }`,
      donorType === "organization"
        ? `Organization Name: ${form.organizationName.trim()}`
        : null,
      `Name: ${form.firstName.trim()} ${form.lastName.trim()}`,
      `Phone: +91 ${form.phone.trim()}`,
      `Email: ${form.email.trim()}`,
      `PAN Number: ${form.pan.trim().toUpperCase()}`,
      `Address: ${form.address.trim()}`,
      `Donation Amount: ₹${Number(form.amount).toLocaleString("en-IN")}`,
      `----------------------------------------`,
      `Excel/CSV Row:\n${buildExcelCsvContent()}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      if (
        EMAILJS_SERVICE_ID !== "service_dharma" &&
        EMAILJS_PUBLIC_KEY !== "riYQKk2AcIbbjf5EY"
      ) {
        const res = await fetch("https://emailjs.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
              from_name: `${form.firstName.trim()} ${form.lastName.trim()}`,
              from_email: form.email.trim(),
              phone: `+91 ${form.phone.trim()}`,
              message: formattedSummary,
            },
          }),
        });
        if (!res.ok) throw new Error("EmailJS delivery failed");
        toast.success("Details sent to Dharma Jyothi Charitable Society!");
      } else {
        const subject = encodeURIComponent(
          `80G Donation Details - ${form.firstName.trim()} ${form.lastName.trim()} (₹${form.amount})`
        );
        const body = encodeURIComponent(formattedSummary);
        window.open(
          `mailto:dharmajyothicharitablesociety@://gmail.com{subject}&body=${body}`,
          "_blank"
        );
        toast.success("Details prepared! Please proceed with bank transfer below.");
      }

      setStep("bank");
      window.scrollTo({ top: 180, behavior: "smooth" });
    } catch {
      toast.error("Could not auto-send email, proceeding to bank details.");
      setStep("bank");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FDF8F0] via-[#F8F5EE] to-[#EEF6EF] py-20">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#5D8A66]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-[#D4AF37]/15 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#355E3B]">
            Make A Difference
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold text-[#355E3B] md:text-6xl">
            Support Our Mission
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Every contribution helps us create lasting impact through education,
            healthcare, community development, and uplifting those who need it
            the most.
          </p>
        </motion.div>

        {/* Step Indicator Pill Bar */}
        <div className="max-w-3xl mx-auto mb-6 flex items-center justify-center gap-3">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              step === "form"
                ? "bg-[#355E3B] text-white shadow-md"
                : "bg-white/80 text-[#355E3B] border border-green-200"
            }`}
          >
            <span>1. Donor 80G Details</span>
          </div>
          <div className="h-0.5 w-8 bg-[#355E3B]/30 rounded-full" />
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              step === "bank"
                ? "bg-[#355E3B] text-white shadow-md"
                : "bg-white/60 text-gray-400 border border-gray-200"
            }`}
          >
            <Lock size={12} />
            <span>2. Bank Transfer Details</span>
          </div>
        </div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[32px] border border-white/60 bg-white/85 backdrop-blur-xl shadow-[0_20px_60px_rgba(53,94,59,0.12)] p-6 sm:p-10 max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {step === "form" ? (
              <motion.form
                key="donor-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                onSubmit={handleProceedToBank}
                noValidate
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#5D8A66]">
                      <Sparkles size={13} />
                      80G Tax Exemption Registration
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#355E3B] mt-1">
                      Tell Us Who You Are
                    </h2>
                  </div>
                </div>

                {/* Category Selector Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setDonorType("individual")}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all ${
                      donorType === "individual"
                        ? "border-[#355E3B] bg-[#EEF6EF] shadow-sm"
                        : "border-gray-200 bg-white hover:border-[#5D8A66]/50"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl ${
                        donorType === "individual"
                          ? "bg-[#355E3B] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <User size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Indian Citizen / NRI
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Individual 80G Receipt
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDonorType("organization")}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all ${
                      donorType === "organization"
                        ? "border-[#355E3B] bg-[#EEF6EF] shadow-sm"
                        : "border-gray-200 bg-white hover:border-[#5D8A66]/50"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl ${
                        donorType === "organization"
                          ? "bg-[#355E3B] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Building2 size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Organization in India
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Corporate / Trust 80G Receipt
                      </p>
                    </div>
                  </button>
                </div>

                {/* 80G Notice Banner */}
                <div className="mb-6 rounded-2xl bg-[#FDF8F0] border border-[#D4AF37]/40 px-4 py-3 text-xs font-medium text-[#355E3B]">
                  {donorType === "individual"
                    ? "The 80G donation receipt will be made in the name of the donor subject to settlement."
                    : "The 80G donation receipt will be made in the name of the organization."}
                </div>
                {/* Form Fields */}
                <div className="space-y-5">
                  {donorType === "organization" && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Organization Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.organizationName}
                        onBlur={() => markTouched("organizationName")}
                        onChange={(e) =>
                          updateField("organizationName", e.target.value)
                        }
                        placeholder="Enter registered organization name"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-[#355E3B] focus:outline-none focus:ring-2 focus:ring-[#355E3B]/20"
                      />
                      {touched.organizationName && errors.organizationName && (
                        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
                          <AlertCircle size={13} /> {errors.organizationName}
                        </p>
                      )}
                    </div>
                  )}

                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        {donorType === "organization"
                          ? "Contact First Name"
                          : "First Name"}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.firstName}
                        onBlur={() => markTouched("firstName")}
                        onChange={(e) =>
                          updateField("firstName", e.target.value)
                        }
                        placeholder="e.g., Rahul"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-[#355E3B] focus:outline-none focus:ring-2 focus:ring-[#355E3B]/20"
                      />
                      {touched.firstName && errors.firstName && (
                        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
                          <AlertCircle size={13} /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        {donorType === "organization"
                          ? "Contact Last Name"
                          : "Last Name"}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.lastName}
                        onBlur={() => markTouched("lastName")}
                        onChange={(e) =>
                          updateField("lastName", e.target.value)
                        }
                        placeholder="e.g., Sharma"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-[#355E3B] focus:outline-none focus:ring-2 focus:ring-[#355E3B]/20"
                      />
                      {touched.lastName && errors.lastName && (
                        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
                          <AlertCircle size={13} /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm font-semibold text-gray-600">
                          +91
                        </span>
                        <input
                          type="tel"
                          maxLength={10}
                          value={form.phone}
                          onBlur={() => markTouched("phone")}
                          onChange={(e) =>
                            updateField(
                              "phone",
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                          placeholder="9845012345"
                          className="w-full rounded-r-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-[#355E3B] focus:outline-none focus:ring-2 focus:ring-[#355E3B]/20"
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
                          <AlertCircle size={13} /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onBlur={() => markTouched("email")}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-[#355E3B] focus:outline-none focus:ring-2 focus:ring-[#355E3B]/20"
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
                          <AlertCircle size={13} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* PAN Card & Amount */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        {donorType === "organization"
                          ? "Organization PAN Number"
                          : "PAN Card Number"}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          maxLength={10}
                          value={form.pan}
                          onBlur={() => markTouched("pan")}
                          onChange={(e) => updateField("pan", e.target.value)}
                          placeholder={
                            donorType === "individual"
                              ? "ETHPR5278H"
                              : "AAACT2501F"
                          }
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-bold tracking-widest uppercase text-gray-900 focus:border-[#355E3B] focus:outline-none focus:ring-2 focus:ring-[#355E3B]/20"
                        />
                        {!errors.pan && form.pan.length === 10 && (
                          <CheckCircle2
                            size={18}
                            className="absolute right-3.5 top-3.5 text-emerald-600"
                          />
                        )}
                      </div>
                      {touched.pan && errors.pan && (
                        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
                          <AlertCircle size={13} /> {errors.pan}
                        </p>
                      )}
                      {!errors.pan && panValidation.badge && (
                        <p className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 size={12} /> {panValidation.badge}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Donation Amount (₹){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        min={100}
                        value={form.amount}
                        onBlur={() => markTouched("amount")}
                        onChange={(e) => updateField("amount", e.target.value)}
                        placeholder="e.g., 1000"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-gray-900 focus:border-[#355E3B] focus:outline-none focus:ring-2 focus:ring-[#355E3B]/20"
                      />
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {["500", "1000", "2500", "5000"].map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => updateField("amount", preset)}
                            className={`px-2.5 py-1 rounded-full text-xs font-bold border transition ${
                              form.amount === preset
                                ? "bg-[#355E3B] text-white border-[#355E3B]"
                                : "bg-green-50 text-[#355E3B] border-green-200 hover:bg-green-100"
                            }`}
                          >
                            ₹{preset}
                          </button>
                        ))}
                      </div>
                      {touched.amount && errors.amount && (
                        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
                          <AlertCircle size={13} /> {errors.amount}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      {donorType === "organization"
                        ? "Organization's Registered Address"
                        : "Address"}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={2}
                      value={form.address}
                      onBlur={() => markTouched("address")}
                      onChange={(e) => updateField("address", e.target.value)}
                      placeholder="Door No, Street, City, State, PIN Code"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:border-[#355E3B] focus:outline-none focus:ring-2 focus:ring-[#355E3B]/20"
                    />
                    {touched.address && errors.address && (
                      <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
                        <AlertCircle size={13} /> {errors.address}
                      </p>
                    )}
                  </div>

                  {/* Math Verification */}
                  <div className="rounded-2xl bg-[#F7FAF7] border border-green-200 p-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Please select the right answer{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-xl bg-white border border-green-200 px-4 py-2 text-base font-extrabold text-[#355E3B]">
                        {captcha.a} + {captcha.b} =
                      </span>
                      {captcha.options.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            updateField("captchaAnswer", String(opt));
                            markTouched("captchaAnswer");
                          }}
                          className={`px-5 py-2 rounded-xl text-sm font-extrabold border-2 transition-all ${
                            form.captchaAnswer === String(opt)
                              ? "border-[#355E3B] bg-[#355E3B] text-white shadow-sm"
                              : "border-gray-300 bg-white text-gray-800 hover:border-[#5D8A66]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {touched.captchaAnswer && errors.captchaAnswer && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
                        <AlertCircle size={13} /> {errors.captchaAnswer}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={!isFormValid || submitting}
                    whileHover={isFormValid ? { scale: 1.02 } : {}}
                    whileTap={isFormValid ? { scale: 0.98 } : {}}
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-bold transition-all shadow-lg ${
                      isFormValid
                        ? "bg-gradient-to-r from-[#355E3B] to-[#5D8A66] text-white cursor-pointer hover:shadow-xl"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                    }`}
                  >
                    <Heart size={18} />
                    <span>
                      {submitting
                        ? "Sending Details..."
                        : "Donate & View Bank Details"}
                    </span>
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              /* STEP 2: BANK DETAILS UNLOCKED AFTER FORM COMPLETION */
              <motion.div
                key="bank-details"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 25 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-green-100">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-2">
                      <CheckCircle2 size={14} /> 80G Details Recorded for{" "}
                      {form.firstName} ({form.pan})
                    </span>
                    <h2 className="text-2xl font-bold text-[#355E3B]">
                      Bank Transfer Details
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={downloadDonorExcelCsv}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-green-200 bg-green-50 px-3.5 py-2 text-xs font-bold text-[#355E3B] hover:bg-green-100 transition"
                    >
                      <Download size={14} />
                      Excel / CSV
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep("form")}
                      className="inline-flex items-center gap-1 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-xs font-bold text-gray-600 hover:bg-gray-50 transition"
                    >
                      <ArrowLeft size={14} />
                      Edit
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {bankDetails.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="group flex items-center justify-between rounded-2xl border border-green-100 bg-green-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-100 hover:shadow-md"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                          {item.label}
                        </p>
                        <p className="mt-1 font-semibold text-gray-800">
                          {item.value}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => copyText(item.value)}
                        className="rounded-full bg-white p-2.5 shadow transition-all hover:bg-[#355E3B] hover:text-white"
                      >
                        <Copy size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>

                               <div className="mt-6 rounded-2xl bg-[#FDF8F0] border border-[#D4AF37]/40 p-4 text-xs text-gray-700 leading-relaxed space-y-1.5">
                  <p>
                    <strong>Next Step:</strong> Please complete your NEFT / IMPS /
                    UPI transfer of{" "}
                    <strong className="text-[#355E3B]">
                      ₹{Number(form.amount).toLocaleString("en-IN")}
                    </strong>{" "}
                    using the bank details above.
                  </p>
                  <p>
                    After completing the transfer, please email your payment
                    screenshot / Transaction Reference (UTR) to{" "}
                    <strong className="text-[#355E3B]">
                      dharmajyothicharitablesociety@gmail.com
                    </strong>{" "}
                    so our office can verify the settlement and issue your official{" "}
                    <strong>80G Tax Exemption Receipt</strong> to{" "}
                    <strong>{form.email}</strong>.
                  </p>
                </div>


                {/* Trust Badges */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2.5 rounded-xl bg-[#F7FAF7] p-3 text-xs font-medium text-gray-700">
                    <ShieldCheck size={18} className="text-[#355E3B] shrink-0" />
                    Secure &amp; Trusted
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-[#F7FAF7] p-3 text-xs font-medium text-gray-700">
                    <BadgeCheck size={18} className="text-[#355E3B] shrink-0" />
                    80G Tax Eligible
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-[#F7FAF7] p-3 text-xs font-medium text-gray-700">
                    <HandHeart size={18} className="text-[#355E3B] shrink-0" />
                    Direct Impact
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#355E3B] to-[#5D8A66] p-10 text-center text-white shadow-xl"
        >
          <Heart size={34} className="mx-auto mb-4 text-[#F8D775]" />
          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            &ldquo;No act of kindness, no matter how small, is ever wasted. Your
            support helps us touch lives, create opportunities, and build a
            brighter future for communities in need.&rdquo;
          </p>
        </motion.div>
      </div>
    </main>
  );
}
