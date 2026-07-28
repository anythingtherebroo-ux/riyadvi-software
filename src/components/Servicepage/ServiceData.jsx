import {
    Globe,
    Smartphone,
    Palette,
    Megaphone,
    Cuboid,
    Box
} from "lucide-react";

export const services = {

    web: {
        slug: "web-development",

        title: "Web Development",

        subtitle:
            "Modern, scalable websites and web applications built to grow your business.",

        icon: Globe,

        heroImage:
            "/images/services/web-development.jpg",

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
            "API Integration"
        ],

        industries: [
            "Healthcare",
            "Education",
            "Finance",
            "Real Estate",
            "Manufacturing",
            "Startups",
            "Retail",
            "Travel"
        ],

        tech: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "Laravel",
            "MongoDB",
            "PostgreSQL",
            "AWS"
        ]
    },

    app: {
        slug: "app-development",

        title: "App Development",

        subtitle:
            "Cross-platform mobile apps delivering seamless user experiences.",

        icon: Smartphone,

        heroImage:
            "/images/services/app-development.jpg",

        problem:
            "Many businesses lose customers because they don't provide a reliable mobile experience.",

        solution:
            "We build scalable Android and iOS applications with beautiful UI and powerful backend systems.",

        features: [
            "Android",
            "iOS",
            "Flutter",
            "React Native",
            "Push Notifications",
            "Authentication",
            "Payment Gateway",
            "Analytics"
        ],

        industries: [
            "Healthcare",
            "Retail",
            "Education",
            "Fitness",
            "Food Delivery",
            "Travel"
        ],

        tech: [
            "Flutter",
            "React Native",
            "Firebase",
            "Node.js",
            "MongoDB",
            "REST API"
        ]
    },

    uiux: {

        slug: "uiux-design",

        title: "UI/UX Design",

        subtitle:
            "Creating intuitive digital experiences people love.",

        icon: Palette,

        heroImage:
            "/images/services/uiux.jpg",

        problem:
            "Poor design reduces trust and increases user drop-off.",

        solution:
            "Our designers create beautiful, research-driven interfaces focused on usability and conversions.",

        features: [
            "User Research",
            "Wireframes",
            "Design Systems",
            "Prototypes",
            "Accessibility",
            "Responsive UI",
            "UX Audit"
        ],

        industries: [
            "SaaS",
            "Healthcare",
            "Finance",
            "Retail"
        ],

        tech: [
            "Figma",
            "Adobe XD",
            "Illustrator",
            "Photoshop"
        ]
    },

    marketing: {

        slug: "digital-marketing",

        title: "Digital Marketing",

        subtitle:
            "Data-driven campaigns that generate measurable growth.",

        icon: Megaphone,

        heroImage:
            "/images/services/digital-marketing.jpg",

        problem:
            "Businesses spend money on marketing but fail to generate quality leads.",

        solution:
            "We create targeted digital campaigns that improve visibility, traffic, and conversions.",

        features: [
            "SEO",
            "Google Ads",
            "Facebook Ads",
            "Content Marketing",
            "Email Marketing",
            "Analytics"
        ],

        industries: [
            "Retail",
            "Education",
            "Healthcare",
            "Real Estate"
        ],

        tech: [
            "Google Analytics",
            "Meta Ads",
            "SEMrush",
            "Mailchimp"
        ]
    },

    arvr: {

        slug: "ar-vr",

        title: "AR / VR Solutions",

        subtitle:
            "Immersive digital experiences for modern businesses.",

        icon: Cuboid,

        heroImage:
            "/images/services/arvr.jpg",

        problem:
            "Traditional experiences fail to engage modern audiences.",

        solution:
            "We build immersive AR and VR applications for training, visualization, and customer engagement.",

        features: [
            "Virtual Tours",
            "3D Interaction",
            "Simulation",
            "Training",
            "Gaming",
            "Visualization"
        ],

        industries: [
            "Construction",
            "Education",
            "Healthcare",
            "Manufacturing"
        ],

        tech: [
            "Unity",
            "Unreal",
            "Blender",
            "ARCore",
            "ARKit"
        ]
    },

    modeling: {

        slug: "3d-modeling",

        title: "3D Modeling",

        subtitle:
            "Realistic 3D assets for products, architecture, and interactive experiences.",

        icon: Box,

        heroImage:
            "/images/services/3d.jpg",

        problem:
            "Businesses need high-quality visual assets to showcase products and concepts.",

        solution:
            "Our artists create detailed, optimized 3D models ready for web, games, AR, VR, and product visualization.",

        features: [
            "Product Modeling",
            "Architecture",
            "Animation",
            "Rendering",
            "Texturing",
            "Optimization"
        ],

        industries: [
            "Manufacturing",
            "Architecture",
            "Gaming",
            "Real Estate"
        ],

        tech: [
            "Blender",
            "Maya",
            "3ds Max",
            "Substance Painter"
        ]
    }

};