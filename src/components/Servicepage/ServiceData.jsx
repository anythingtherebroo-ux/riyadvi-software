import {
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  Cuboid,
  Box,
} from "lucide-react";

export const services = {
  web: {
    slug: "web-development",
    title: "Web Development",
    subtitle:
      "Modern, scalable websites and web applications built to grow your business.",
    icon: Globe,
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    problem:
      "Businesses often struggle with outdated websites, poor performance, and low conversion rates. Customers leave because the experience feels slow and unprofessional.",
    solution:
      "We build fast, SEO-friendly, responsive websites and enterprise-grade web applications that increase trust, generate leads, and improve customer engagement.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "CMS Integration",
      "E-Commerce",
      "Admin Dashboard",
      "High Performance",
      "Security",
      "API Integration",
    ],
    industries: [
      "Healthcare",
      "Education",
      "Finance",
      "Real Estate",
      "Manufacturing",
      "Startups",
      "Retail",
      "Travel",
    ],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Laravel",
      "MongoDB",
      "PostgreSQL",
      "AWS",
    ],
  },

  app: {
    slug: "app-development",
    title: "App Development",
    subtitle:
      "Cross-platform mobile apps delivering seamless user experiences.",
    icon: Smartphone,
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    problem:
      "Many businesses lose customers because they don't provide a reliable, intuitive mobile experience across iOS and Android.",
    solution:
      "We build scalable Android and iOS applications with beautiful UI, robust offline features, and powerful backend systems.",
    features: [
      "Android & iOS",
      "Cross-Platform Flutter",
      "React Native",
      "Push Notifications",
      "Biometric Authentication",
      "Payment Gateway",
      "Real-Time Analytics",
      "Offline Mode Support",
    ],
    industries: [
      "Healthcare",
      "Retail",
      "Education",
      "Fitness",
      "Travel",
      "Startups",
    ],
    tech: [
      "Flutter",
      "React Native",
      "Firebase",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
  },

  uiux: {
    slug: "uiux-design",
    title: "UI/UX Design",
    subtitle:
      "Creating intuitive, visually stunning digital experiences people love.",
    icon: Palette,
    heroImage:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
    problem:
      "Cluttered interfaces and confusing user flows reduce customer trust, increase drop-off rates, and hurt sales.",
    solution:
      "Our designers create beautiful, research-driven user interfaces focused on frictionless usability, accessibility, and high conversion.",
    features: [
      "User Research & Testing",
      "Wireframing & Architecture",
      "Design Systems",
      "Interactive Prototypes",
      "WCAG Accessibility",
      "Responsive UI Design",
      "UX Audit & Redesign",
    ],
    industries: ["SaaS", "Healthcare", "Finance", "Retail", "Education"],
    tech: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
  },

  marketing: {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle:
      "Data-driven campaigns that generate measurable business growth.",
    icon: Megaphone,
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    problem:
      "Businesses spend significant budgets on marketing but fail to attract qualified leads or turn traffic into revenue.",
    solution:
      "We build targeted digital campaigns with continuous optimization to increase brand visibility, organic traffic, and customer acquisition.",
    features: [
      "Search Engine Optimisation (SEO)",
      "Pay-Per-Click (Google Ads)",
      "Social Media Marketing",
      "Content Strategy",
      "Email Campaign Automation",
      "Conversion Rate Optimisation",
    ],
    industries: ["Retail", "Education", "Healthcare", "Real Estate", "Startups"],
    tech: ["Google Analytics", "Vercel", "Cloudflare"],
  },

  arvr: {
    slug: "ar-vr",
    title: "AR / VR Solutions",
    subtitle:
      "Immersive 3D and augmented reality experiences for modern enterprises.",
    icon: Cuboid,
    heroImage:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1200&auto=format&fit=crop",
    problem:
      "Traditional 2D media often fails to effectively showcase complex products or deliver engaging training experiences.",
    solution:
      "We build interactive AR and VR applications for product visualization, virtual tours, simulation training, and customer engagement.",
    features: [
      "Virtual Property Tours",
      "Interactive 3D Showrooms",
      "Industrial Simulation",
      "VR Training Modules",
      "Augmented Product Fitting",
      "Cross-Platform Support",
    ],
    industries: ["Manufacturing", "Education", "Healthcare", "Real Estate"],
    tech: ["Docker", "AWS", "Node.js"],
  },

  modeling: {
    slug: "3d-modeling",
    title: "3D Modeling",
    subtitle:
      "Photorealistic 3D assets for products, architecture, and interactive platforms.",
    icon: Box,
    heroImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    problem:
      "Businesses need high-fidelity visual assets to present products and architectural concepts before production.",
    solution:
      "Our 3D artists craft highly detailed, optimized 3D models and renders ready for web integration, AR apps, and marketing materials.",
    features: [
      "3D Product Modeling",
      "Architectural Rendering",
      "3D Animation & Motion",
      "Photorealistic Texturing",
      "Asset Optimisation for Web",
      "CAD to 3D Conversion",
    ],
    industries: ["Manufacturing", "Real Estate", "Retail"],
    tech: ["Figma", "Photoshop", "Illustrator"],
  },
};

export const servicesList = Object.values(services);

export function getServiceBySlug(slug) {
  return servicesList.find((service) => service.slug === slug);
}