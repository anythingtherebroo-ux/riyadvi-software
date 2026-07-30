import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  User,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Cpu,
  ExternalLink,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";
import projects from "../components/PortfolioPage/portfolioData";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (p) => p.slug === slug || String(p.id) === slug || p._id === slug
  );

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const handleStartProject = () => {
    const contactSection =
      document.getElementById("contact-form") ||
      document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <>
      <SEO
        title={`${project.title} Case Study | Riyadvi Software Technologies`}
        description={project.solution}
        url={`https://riyadvi.com/portfolio/${project.slug}`}
      />

      <MainLayout>
        <section className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-24 sm:pb-32 text-white">
          {/* Ambient Background Glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/15 blur-[160px]" />
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[140px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Navigation & Breadcrumb */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37] transition hover:underline"
              >
                <ArrowLeft size={16} />
                <span>Back to Portfolio</span>
              </Link>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 font-medium">
                <Link to="/" className="transition hover:text-[#d4af37]">Home</Link>
                <ChevronRight size={14} className="text-gray-600" />
                <Link to="/portfolio" className="transition hover:text-[#d4af37]">Portfolio</Link>
                <ChevronRight size={14} className="text-gray-600" />
                <span className="text-[#d4af37] truncate max-w-[150px] sm:max-w-none">{project.title}</span>
              </div>
            </div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="text-[#d4af37]" size={16} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  {project.category} Case Study
                </span>
              </div>

              <h1 className="font-poppins text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight">
                {project.title}
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-[#d4af37]" />
                  <span><b>Client:</b> {project.client}</span>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#d4af37] font-semibold transition hover:underline"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Featured Showcase Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-3 backdrop-blur-2xl shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[320px] sm:h-[500px] w-full rounded-2xl object-cover"
              />
            </motion.div>

            {/* Case Study Details Breakdown (5 Sections) */}
            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Left Column: Problem, Solution, Result */}
              <div className="space-y-12 lg:col-span-8">
                
                {/* 1. Problem */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-red-500/20 bg-white/[0.04] p-8 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                      <AlertTriangle size={24} />
                    </div>
                    <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-white">
                      1. The Challenge & Problem
                    </h2>
                  </div>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300">
                    {project.problem}
                  </p>
                </motion.div>

                {/* 2. Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 via-white/[0.04] to-white/[0.02] p-8 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/20 text-[#d4af37]">
                      <CheckCircle2 size={24} />
                    </div>
                    <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-white">
                      2. Our Engineering Solution
                    </h2>
                  </div>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300">
                    {project.solution}
                  </p>
                </motion.div>

                {/* 3. Result */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/20 text-green-400">
                      <TrendingUp size={24} />
                    </div>
                    <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-white">
                      3. Measurable Result & Impact
                    </h2>
                  </div>
                  <p className="mt-4 text-base sm:text-lg font-semibold leading-relaxed text-green-300">
                    {project.result}
                  </p>
                </motion.div>

              </div>

              {/* Right Sidebar: Client Info & Tools Used */}
              <div className="space-y-8 lg:col-span-4">
                
                {/* 4. Client & Project Overview Sidebar */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <h3 className="font-poppins text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                    Project Overview
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-gray-400 block text-xs uppercase tracking-wider">Client Name</span>
                      <span className="text-white font-semibold text-base">{project.client}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 block text-xs uppercase tracking-wider">Category</span>
                      <span className="text-[#d4af37] font-semibold">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* 5. Tools Used Grid */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                    <Cpu size={20} className="text-[#d4af37]" />
                    <h3 className="font-poppins text-xl font-bold text-white">
                      Tools & Technologies Used
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/15 px-3.5 py-2 text-xs font-semibold text-[#d4af37]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="rounded-3xl border border-[#d4af37]/40 bg-gradient-to-b from-[#d4af37]/20 to-black p-6 text-center shadow-xl">
                  <h3 className="font-poppins text-xl font-bold text-white">
                    Need a Similar Solution?
                  </h3>
                  <p className="mt-2 text-xs text-gray-300">
                    Let's discuss how we can build a high-performing product for your business.
                  </p>
                  <button
                    onClick={handleStartProject}
                    className="mt-6 w-full rounded-full bg-[#d4af37] py-3.5 text-sm font-semibold text-black transition hover:scale-105"
                  >
                    Get a Quote
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}