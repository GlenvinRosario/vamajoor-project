import qr from "@/assets/qr.png";
import { Copy, Heart } from "lucide-react";
import { toast } from "sonner";

const bankDetails = [
  { label: "Account Name", value: "Dharma Jyothi Social Centre" },
  { label: "Bank Name", value: "State Bank of India" },
  { label: "Account Number", value: "123456789012" },
  { label: "IFSC Code", value: "SBIN0001234" },
  { label: "Branch", value: "Bangalore Main Branch" },
  { label: "UPI ID", value: "dharmajyothi@upi" },
];

export default function Donations() {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <main className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-maroon mb-3">
            Support Our Mission
          </h1>

          <p className="font-body text-gray-600 text-sm max-w-xl mx-auto">
            Your generosity helps us continue our work in education, healthcare
            and community development.
          </p>
        </div>

        {/* Donation Card */}
        <div className="bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden animate-fade-in">
          {/* QR Section */}
          <div className="bg-gradient-to-br from-[#355E3B] to-lightgreen text-white flex flex-col items-center justify-center p-10">
            <h2 className="font-display text-xl text-gold font-semibold mb-6">
              Scan & Donate
            </h2>

            <div className="bg-white p-4 rounded-xl shadow-lg">
              <img
                src={qr}
                alt="Donation QR"
                className="w-56 h-56 object-contain animate-float"
              />
            </div>

            <p className="font-body text-sm text-white/80 mt-5 text-center">
              Scan this QR using any UPI app (GPay / PhonePe / Paytm)
            </p>
          </div>

          {/* Bank Details */}
          <div className="p-10">
            <h2 className="font-display text-xl font-semibold text-maroon mb-6">
              Bank Transfer Details
            </h2>

            <div className="space-y-4 text-sm font-body">
              {bankDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <span className="text-gray-500">{item.label}</span>

                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800">
                      {item.value}
                    </span>

                    <button
                      onClick={() => copyText(item.value)}
                      className="text-gray-400 hover:text-lightgreen transition"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="flex items-center gap-2 bg-gold text-maroon font-semibold px-5 py-2.5 rounded-lg hover:bg-lightgreen hover:text-white transition-all">
                <Heart size={16} />
                Thank You For Supporting
              </button>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-3xl font-bold text-lightgreen">500+</p>
            <p className="text-sm text-gray-500">Children Supported</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-3xl font-bold text-lightgreen">120+</p>
            <p className="text-sm text-gray-500">Medical Camps</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-3xl font-bold text-lightgreen">50+</p>
            <p className="text-sm text-gray-500">Villages Reached</p>
          </div>
        </div>
      </div>
    </main>
  );
}
