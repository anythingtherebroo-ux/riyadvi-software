import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import ContactHero from "../components/ContactPage/ContactHero";
import ContactCards from "../components/ContactPage/ContactCards";
import ContactForm from "../components/ContactPage/ContactForm";
import CalendlySection from "../components/ContactPage/CalendlySection";
import LocationSection from "../components/ContactPage/LocationSection";
import FAQ from "../components/ContactPage/FAQ";
import ContactCTA from "../components/ContactPage/ContactCTA";
import WhatsAppWidget from "../components/ContactPage/WhatsAppWidget";

function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Riyadvi Software Technologies"
        description="Get in touch with Riyadvi Software Technologies. Book a free consultation, request a project quote, or chat with our software experts."
        keywords="contact riyadvi, book consultation, software agency contact, software quote"
        url="https://riyadvi.com/contact"
      />

      <MainLayout>
        <ContactHero />
        <ContactCards />
        <ContactForm />
        <CalendlySection />
        <LocationSection />
        <FAQ />
        <ContactCTA />
        <WhatsAppWidget />
      </MainLayout>
    </>
  );
}

export default Contact;