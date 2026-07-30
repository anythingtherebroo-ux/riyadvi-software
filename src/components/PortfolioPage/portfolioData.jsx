import webdevelopment from "../../assets/images/webdevelopment.webp";

export const projects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    category: "Web Development",
    image:
      webdevelopment ||
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
    client: "ABC Fashion Global",
    problem:
      "The client had an outdated e-commerce website with slow page load speeds (5.8 seconds) and a confusing multi-step checkout process, causing a 45% cart abandonment rate and lost mobile sales.",
    solution:
      "We engineered a modern, head-less e-commerce platform using React, Node.js, and MongoDB. We implemented a mobile-first responsive UI, single-page instant checkout with Stripe API, and real-time inventory synchronization.",
    result:
      "220% increase in online sales, 35% boost in mobile conversion rate, and load times dropped below 1.2 seconds within 6 months.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe API", "AWS"],
    liveUrl: "https://riyadvi.com",
    featured: true,
  },
  {
    id: 2,
    slug: "healthcare-mobile-app",
    title: "Healthcare Telemedicine App",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    client: "MedCare Health Network",
    problem:
      "Patients faced long wait times to schedule doctor consultations, while medical staff struggled with manual paper prescriptions and disjointed communication channels.",
    solution:
      "Built a secure, HIPAA-compliant cross-platform Flutter mobile application featuring HD video consultations via WebRTC, instant digital prescription downloads, and automated push notifications.",
    result:
      "65% increase in online doctor appointments booked and a 98% patient satisfaction rating across 10,000+ active users.",
    technologies: ["Flutter", "Firebase", "Node.js", "WebRTC", "Express", "Docker"],
    liveUrl: "https://riyadvi.com",
    featured: true,
  },
  {
    id: 3,
    slug: "real-estate-dashboard",
    title: "Real Estate Analytics Portal",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    client: "Dream Homes Realty",
    problem:
      "Real estate agents were manually tracking property inquiries and sales analytics across multiple disjointed spreadsheets, resulting in slow follow-ups and lost property leads.",
    solution:
      "Created an interactive real-time admin portal with automated lead routing, interactive Mapbox filters, automated contract generation, and analytics dashboards.",
    result:
      "80% faster property listing management and 3x faster lead response time for sales agents.",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js", "Mapbox", "AWS"],
    liveUrl: "https://riyadvi.com",
    featured: true,
  },
  {
    id: 4,
    slug: "fintech-banking-dashboard",
    title: "Fintech Banking UI/UX",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    client: "PayGlobe Finance",
    problem:
      "Users found the existing digital banking dashboard cluttered and unintuitive, resulting in high customer support ticket volume and negative app store reviews.",
    solution:
      "Designed a sleek, dark-mode accessible UI/UX design system in Figma focused on micro-interactions, rapid money transfers, and clear visual financial charts.",
    result:
      "50% reduction in customer support tickets and a 95% usability rating during user testing.",
    technologies: ["Figma", "Design Systems", "Prototyping", "UX Research", "Adobe Illustrator"],
    liveUrl: "https://riyadvi.com",
    featured: false,
  },
  {
    id: 5,
    slug: "arvr-industrial-simulation",
    title: "AR/VR Industrial Training",
    category: "AR/VR",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&q=80",
    client: "AeroTech Manufacturing",
    problem:
      "Onboarding new technicians on heavy industrial machinery was expensive, dangerous, and required halting active factory production lines.",
    solution:
      "Developed a 3D VR simulation in Unity that allows technicians to practice complex equipment assembly and emergency protocols in a zero-risk virtual environment.",
    result:
      "70% reduction in onboarding training costs and zero workplace safety incidents recorded during training.",
    technologies: ["Unity 3D", "C#", "Oculus SDK", "Blender", "3ds Max"],
    liveUrl: "https://riyadvi.com",
    featured: false,
  },
  {
    id: 6,
    slug: "3d-product-visualization",
    title: "3D Interactive Product Customizer",
    category: "3D Modeling",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    client: "Luxe Furniture Co",
    problem:
      "Online shoppers found static 2D product photos insufficient to evaluate custom furniture fabrics, colors, and room fit.",
    solution:
      "Engineered an interactive WebGL 3D product visualizer in Three.js allowing customers to customize materials, colors, and room lighting in real time.",
    result:
      "180% increase in average time spent on product pages and a 40% decrease in product return rates.",
    technologies: ["Three.js", "WebGL", "Blender", "JavaScript", "GLSL"],
    liveUrl: "https://riyadvi.com",
    featured: false,
  },
];

export default projects;