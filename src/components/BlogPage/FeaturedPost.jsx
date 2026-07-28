import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock3,
  ArrowRight,
  User,
} from "lucide-react";

export default function FeaturedPost() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Featured Article

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Editor's

            <span className="block text-[#D4AF37]">

              Pick

            </span>

          </h2>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          whileHover={{
            y: -6,
          }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-[#0B0B0B]"
        >

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative overflow-hidden">

              <img
                src="/images/blog/featured.jpg"
                alt="Featured Blog"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-10 lg:p-16">

              <span className="w-fit rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">

                Web Development

              </span>

              <h3 className="mt-8 text-4xl font-black leading-tight text-white">

                10 Modern Web Development Trends

                Every Business Should Know in 2026

              </h3>

              <p className="mt-8 text-lg leading-8 text-gray-400">

                Discover the latest technologies,
                frameworks and design practices shaping
                modern web applications. Learn how AI,
                cloud computing and performance optimisation
                are transforming digital experiences.

              </p>

              {/* Meta */}

              <div className="mt-10 flex flex-wrap gap-8">

                <div className="flex items-center gap-3 text-gray-400">

                  <Calendar
                    size={18}
                    className="text-[#D4AF37]"
                  />

                  July 20, 2026

                </div>

                <div className="flex items-center gap-3 text-gray-400">

                  <Clock3
                    size={18}
                    className="text-[#D4AF37]"
                  />

                  8 min read

                </div>

                <div className="flex items-center gap-3 text-gray-400">

                  <User
                    size={18}
                    className="text-[#D4AF37]"
                  />

                  Riyadvi Team

                </div>

              </div>

              <Link
                to="/blog/web-development-trends-2026"
                className="group mt-12 inline-flex w-fit items-center rounded-xl bg-[#D4AF37] px-7 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.35)]"
              >

                Read Full Article

                <ArrowRight
                  size={18}
                  className="ml-3 transition group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}