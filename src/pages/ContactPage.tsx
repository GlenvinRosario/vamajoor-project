import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-[#f4f7f5] via-white to-[#f4f7f5] w-full min-h-screen font-sans">
      {/* 1. HERO GRAPHIC BANNER */}
      <ContactHero />

      {/* 2. RESPONSIVE GRID LAYOUT WRAPPER */}
      <section className="py-20 md:py-28 w-full flex justify-center items-center px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            
            {/* LEFT COLUMN: CONTACT DETAILS (Takes 5 slots out of 12) */}
            <div className="lg:col-span-5 w-full sticky top-32">
              <ContactInfo />
            </div>

            {/* RIGHT COLUMN: ACTION CONTACT FORM (Takes 7 slots out of 12) */}
            <div className="lg:col-span-7 w-full bg-white rounded-3xl border border-gray-100 shadow-[0_15px_45px_rgba(15,35,22,0.04)] p-8 md:p-10">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
