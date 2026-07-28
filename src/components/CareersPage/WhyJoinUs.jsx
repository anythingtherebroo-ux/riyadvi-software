import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Rocket,
  Users,
  Award,
  HeartHandshake,
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
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Why Join Riyadvi

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Grow Your Career

            <span className="block text-[#D4AF37]">

              With Purpose

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            At Riyadvi, you'll solve real-world challenges, collaborate with talented
            professionals and build innovative digital products that make an impact.

          </p>

        </motion.div>

        {/* Benefit Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (

              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[30px] border border-white/10 bg-[#0B0B0B] p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,.18)]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">

                  <Icon
                    size={30}
                    className="text-[#D4AF37] transition group-hover:text-black"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {benefit.title}

                </h3>

                <p className="mt-5 leading-8 text-gray-400">

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