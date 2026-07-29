import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Service";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import LeadMagnet from "../components/LeadMagnet/LeadMagnet";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    
    <>
      <SEO
        title="Riyadvi | Software Development Company"
        description="Riyadvi provides web development, UI/UX design, AI solutions and digital marketing services."
        keywords="software company, web development, react, nodejs, ui ux"
        url="https://riyadvi.com/"
        
      />


      <MainLayout>
        <Hero />
        <Services />
        <WhyChooseUs />
        <LeadMagnet />
        <Portfolio />
        <Testimonials />
      </MainLayout>
    </>
  );
}

export default Home;