import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";
import { services } from "../components/Servicepage/ServiceData";

function Services() {
  const serviceList = Object.values(services);
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Our Services | Riyadvi Software Technologies"
        description="Web development, app development, digital marketing, AR/VR, 3D modeling and UI/UX design services from Riyadvi Software Technologies."
        keywords="software company, web development, app development, ui ux, digital marketing"
        url="https://riyadvi.com/services"
      />

      <MainLayout>
        <section className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-24 sm:pb-32 text-white">
          {/* Background Ambient Glows & Grid */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
            <div className="absolute -top-32 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/15 blur-[160px]" />
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[140px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
            >
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <Sparkles className="text-[#d4af37]" size={16} />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
                  Our Services
                </span>
              </div>

              <h1 className="font-poppins text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Everything You Need{" "}
                <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
                  To Go Digital
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
                From web and app development to design, marketing and
                immersive technology — explore each service in detail.
              </p>
            </motion.div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
              {serviceList.map((service, index) => {
                const Icon = service.icon || Sparkles;
                const code = String(index + 1).padStart(2, "0");

                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="h-full"
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
                    >
                      {/* Hover Top Highlight Bar */}
                      <div className="absolute left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                      <div>
                        {/* Header Row: Code Badge & Icon */}
                        <div className="mb-8 flex items-center justify-between">
                          <span className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-widest text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.1)]">
                            MOD / {code}
                          </span>

                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#d4af37]/20">
                            <Icon size={26} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-poppins text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37]">
                          {service.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="mt-4 text-base leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                          {service.subtitle}
                        </p>
                      </div>

                      {/* Footer CTA */}
                      <div className="mt-8 pt-4">
                        <span className="inline-flex items-center gap-2 font-semibold text-[#d4af37] transition-all duration-300 group-hover:gap-3.5 group-hover:text-yellow-300">
                          <span>Learn More</span>
                          <ArrowRight size={16} />
                        </span>

                        <div className="mt-6 h-[2px] w-12 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Consultation Banner */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-20 rounded-[32px] border border-[#d4af37]/30 bg-gradient-to-r from-[#111111] via-[#0c0c0c] to-black p-8 text-center shadow-[0_0_60px_rgba(212,175,55,0.1)] sm:p-12"
            >
              <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl">
                Need a Custom Digital Solution?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-gray-300 sm:text-lg">
                Have a unique requirement or want to discuss your project directly with our tech team?
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  <Phone size={18} />
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default Services;