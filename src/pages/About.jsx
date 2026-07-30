import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import AboutHero from "../components/AboutPage/AboutHero";
import CompanyStory from "../components/AboutPage/CompanyStory";
import MissionVision from "../components/AboutPage/MissionVision";
import AwardsSection from "../components/AboutPage/AwardsSection";
import CoreValues from "../components/AboutPage/CoreValues";
import Stats from "../components/AboutPage/Stats";
import Timeline from "../components/AboutPage/Timeline";
import WhyChooseUs from "../components/AboutPage/WhyChooseUs";
import WorkProcess from "../components/AboutPage/WorkProcess";
import TeamSection from "../components/AboutPage/TeamSection";
import AboutCTA from "../components/AboutPage/AboutCTA";

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