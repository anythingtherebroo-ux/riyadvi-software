import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import CareersHero from "../components/CareersPage/CareersHero";
import WhyJoinUs from "../components/CareersPage/WhyJoinUs";
import JobFilters from "../components/CareersPage/JobFilters";
import JobListings from "../components/CareersPage/JobListings";
import CareerBenefits from "../components/CareersPage/CareerBenefits";
import ApplicationForm from "../components/CareersPage/ApplicationForm";
import CareersCTA from "../components/CareersPage/CareersCTA";

function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  return (
     <>
     <SEO
        title="Riyadvi | Software Development Company"
        description="Riyadvi provides web development, UI/UX design, AI solutions and digital marketing services."
        keywords="software company, web development, react, nodejs, ui ux"
        url="https://riyadvi.com/"/>

    <MainLayout>
      <CareersHero />

      <WhyJoinUs />

      <JobFilters
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <JobListings
        selectedDepartment={selectedDepartment}
        selectedType={selectedType}
      />

      <CareerBenefits />

      <ApplicationForm />

      <CareersCTA />
    </MainLayout>
    </>
  );
}

export default Careers;