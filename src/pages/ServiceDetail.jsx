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

function ServiceDetail() {
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
        keywords={`${service.title.toLowerCase()}, riyadvi, software company`}
        url={`https://riyadvi.com/services/${service.slug}`}
      />

      <MainLayout>
        <ServiceHero service={service} />
        <ProblemSolution service={service} />
        <Features service={service} />
        <Industries service={service} />
        <TechStack service={service} />
        <CTA service={service} />
      </MainLayout>
    </>
  );
}

export default ServiceDetail;