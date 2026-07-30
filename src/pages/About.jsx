import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import AboutHero from "../components/AboutPageContent/AboutHero";
import CompanyStory from "../components/AboutPageContent/CompanyStory";
import MissionVision from "../components/AboutPageContent/MissionVision";
import AwardsSection from "../components/AboutPageContent/AwardsSection";
import CoreValues from "../components/AboutPageContent/CoreValues";
import Stats from "../components/AboutPageContent/Stats";
import Timeline from "../components/AboutPageContent/Timeline";
import WhyChooseUs from "../components/AboutPageContent/WhyChooseUs";
import WorkProcess from "../components/AboutPageContent/WorkProcess";
import TeamSection from "../components/AboutPageContent/TeamSection";
import AboutCTA from "../components/AboutPageContent/AboutCTA";

function About() {
  return (
    <>
      <SEO
        title="About Us | Riyadvi Software Technologies"
        description="Founded in 2021, Riyadvi Software Technologies delivers modern web applications, mobile apps, AI solutions, and digital transformation for startups and enterprises."
        keywords="about riyadvi, software development company, tech agency, software engineers"
        url="https://riyadvi.com/about"
      />

      <MainLayout>
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <AwardsSection /> 
        <CoreValues />
        <Stats />
        <Timeline />
        <WhyChooseUs />
        <WorkProcess />
        <TeamSection />
        <AboutCTA />
      </MainLayout>
    </>
  );
}

export default About;