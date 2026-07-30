import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import AboutHero from "../components/Aboutpage/AboutHero";
import CompanyStory from "../components/Aboutpage/CompanyStory";
import MissionVision from "../components/Aboutpage/MissionVision";
import AwardsSection from "../components/Aboutpage/AwardsSection"; // <-- Notice 'AwardsSection' with an 's'
import CoreValues from "../components/Aboutpage/CoreValues";
import Stats from "../components/Aboutpage/Stats";
import Timeline from "../components/Aboutpage/Timeline";
import WhyChooseUs from "../components/Aboutpage/WhyChooseUs";
import WorkProcess from "../components/Aboutpage/WorkProcess";
import TeamSection from "../components/Aboutpage/TeamSection";
import AboutCTA from "../components/Aboutpage/AboutCTA";

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
        <AwardsSection /> {/* <-- Fixed here */}
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