import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";
import PortfolioHero from "../components/Portfoliopage/PortfolioHero";
import PortfolioGrid from "../components/Portfoliopage/PortfolioGrid";
import PortfolioCTA from "../components/Portfoliopage/PortfolioCTA";

function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio & Case Studies | Riyadvi Software Technologies"
        description="Explore our latest web applications, mobile apps, UI/UX designs, and software engineering case studies."
        keywords="software portfolio, web development case studies, app showcase, riyadvi projects"
        url="https://riyadvi.com/portfolio"
      />

      <MainLayout>
        <PortfolioHero />
        <PortfolioGrid />
        <PortfolioCTA />
      </MainLayout>
    </>
  );
}

export default Portfolio;