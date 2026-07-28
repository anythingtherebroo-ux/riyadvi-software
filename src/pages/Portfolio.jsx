import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import PortfolioHero from "../components/PortfolioPage/PortfolioHero";
import PortfolioGrid from "../components/PortfolioPage/PortfolioGrid";
import PortfolioCTA from "../components/PortfolioPage/PortfolioCTA";

function PortfolioPage() {
  return (
    <>

     <SEO
        title="Riyadvi | Software Development Company"
        description="Riyadvi provides web development, UI/UX design, AI solutions and digital marketing services."
        keywords="software company, web development, react, nodejs, ui ux"
        url="https://riyadvi.com/"/>

    <MainLayout>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </MainLayout>
  </>
  );
}

export default PortfolioPage;