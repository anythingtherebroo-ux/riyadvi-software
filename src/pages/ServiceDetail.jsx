import { useParams, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import ServiceHero from "../components/Servicepage/ServiceHero";
import ProblemSolution from "../components/Servicepage/ProblemSolution";
import Features from "../components/Servicepage/Features";
import Industries from "../components/Servicepage/Industries";
import TechStack from "../components/Servicepage/TechStack";
import CTA from "../components/Servicepage/CTA";

import { services } from "../components/Servicepage/ServiceData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = Object.values(services).find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.title} | Riyadvi Software Technologies`}
        description={service.subtitle}
        url={`https://riyadvi.com/services/${service.slug}`}
      />

      <MainLayout>
        {/* 1. Hero */}
        <ServiceHero service={service} />

        {/* 2. Problem → Solution Breakdown */}
        <ProblemSolution service={service} />

        {/* 3. Key Features */}
        <Features service={service} />

        {/* 4. Industry Use Cases */}
        <Industries service={service} />

        {/* 5. Tools / Tech Stack */}
        <TechStack service={service} />

        {/* 6. CTA: Get a Quote */}
        <CTA service={service} />
      </MainLayout>
    </>
  );
}