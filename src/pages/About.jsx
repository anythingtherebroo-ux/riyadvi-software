import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import AboutHero from "../components/AboutPage/AboutHero";
import CompanyStory from "../components/AboutPage/CompanyStory";
import MissionVision from "../components/AboutPage/MissionVision";
import CoreValues from "../components/AboutPage/CoreValues";
import Timeline from "../components/AboutPage/Timeline";
import WhyChooseUs from "../components/AboutPage/WhyChooseUs";
import TeamSection from "../components/AboutPage/TeamSection";
import Stats from "../components/AboutPage/Stats";
import WorkProcess from "../components/AboutPage/WorkProcess";
import AboutCTA from "../components/AboutPage/AboutCTA";

function About() {
  return (
     <>
      <SEO
        title="Riyadvi | Software Development Company"
        description="Riyadvi provides web development, UI/UX design, AI solutions and digital marketing services."
        keywords="software company, web development, react, nodejs, ui ux"
        url="https://riyadvi.com/"/>

    <MainLayout>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <WhyChooseUs />
      <TeamSection />
      <Stats />
      <WorkProcess />
      <AboutCTA />
    </MainLayout>
    </>
  );
}

export default About;