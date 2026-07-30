import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Rocket,
  Users,
  Award,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Upskill through mentorship, workshops, certifications and real-world projects using the latest technologies.",
  },
  {
    id: 2,
    icon: Laptop,
    title: "Flexible Work",
    description:
      "Enjoy a healthy work-life balance with flexible schedules and hybrid or remote opportunities where applicable.",
  },
  {
    id: 3,
    icon: Rocket,
    title: "Innovative Projects",
    description:
      "Work on modern web applications, AI products, mobile apps and enterprise solutions for ambitious businesses.",
  },
  {
    id: 4,
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Join a supportive team where ideas are shared openly and everyone contributes to meaningful outcomes.",
  },
  {
    id: 5,
    icon: Award,
    title: "Career Growth",
    description:
      "Take ownership of your career with leadership opportunities, performance recognition and clear progression paths.",
  },
  {
    id: 6,
    icon: HeartHandshake,
    title: "People First",
    description:
      "We believe in respect, transparency and creating an environment where every team member can thrive.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#d4af37]/10 blur-[170px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d4af37]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Why Join Riyadvi
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Grow Your Career <span className="text-[#d4af37]">With Purpose</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            At Riyadvi, you'll solve real-world challenges, collaborate with
            talented professionals and build innovative digital products that make
            an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 font-poppins text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}