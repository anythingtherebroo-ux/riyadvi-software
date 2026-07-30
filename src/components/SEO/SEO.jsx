import { Helmet } from "react-helmet-async";

function SEO({
  title = "Riyadvi Software Technologies | Premium Digital Agency",
  description = "We build premium software solutions, websites, mobile apps and digital experiences that help businesses grow.",
  keywords = "software company, web development, app development, ui ux, digital marketing",
  url = "https://riyadvi.com",
}) {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default SEO;