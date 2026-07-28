import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import BlogHero from "../components/BlogPage/BlogHero";
import BlogCategories from "../components/BlogPage/BlogCategories";
import FeaturedPost from "../components/BlogPage/FeaturedPost";
import BlogGrid from "../components/BlogPage/BlogGrid";
import NewsletterCTA from "../components/BlogPage/NewsletterCTA";
import BlogCTA from "../components/BlogPage/BlogCTA";

export default function Blog() {
  return (
    <>
     <SEO
        title="Riyadvi | Software Development Company"
        description="Riyadvi provides web development, UI/UX design, AI solutions and digital marketing services."
        keywords="software company, web development, react, nodejs, ui ux"
        url="https://riyadvi.com/"/>

    <MainLayout>
      <BlogHero />
      <BlogCategories />
      <FeaturedPost />
      <BlogGrid />
      <NewsletterCTA />
      <BlogCTA />
    </MainLayout>
    </>
  );
}