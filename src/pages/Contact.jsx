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

export default function Contact() {
  return (
    <>

     <SEO
        title="Riyadvi | Software Development Company"
        description="Riyadvi provides web development, UI/UX design, AI solutions and digital marketing services."
        keywords="software company, web development, react, nodejs, ui ux"
        url="https://riyadvi.com/"/>

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