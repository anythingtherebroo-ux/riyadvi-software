import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";

import BlogHero from "../components/BlogPage/BlogHero";
import BlogCategories from "../components/BlogPage/BlogCategories";
import FeaturedPost from "../components/BlogPage/FeaturedPost";
import BlogGrid from "../components/BlogPage/BlogGrid";
import NewsletterCTA from "../components/BlogPage/NewsletterCTA";
import BlogCTA from "../components/BlogPage/BlogCTA";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <SEO
        title="Tech Insights & Blog | Riyadvi Software Technologies"
        description="Read the latest articles on web development trends, AI innovations, UI/UX design principles, and cloud computing from Riyadvi."
        keywords="web development blog, AI trends 2026, UI UX design principles, cloud computing guide"
        url="https://riyadvi.com/blog"
      />

      <MainLayout>
        {/* Hero Banner */}
        <BlogHero />

        {/* Editor's Featured Pick */}
        <FeaturedPost />

        {/* Interactive Categories Selection */}
        <BlogCategories
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Filtered Blog Grid */}
        <BlogGrid activeCategory={activeCategory} />

        {/* Newsletter Subscription */}
        <NewsletterCTA />

        {/* Conversion CTA */}
        <BlogCTA />
      </MainLayout>
    </>
  );
}