import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-[#f4f7f5] via-white to-[#f4f7f5] w-full min-h-screen">
      <ContactHero />

      <section className="py-16 md:py-24 w-full flex justify-center items-center">
        <div className="container mx-auto px-4 max-w-4xl flex justify-center">
          <ContactInfo />
        </div>
      </section>
    </main>
  );
}
