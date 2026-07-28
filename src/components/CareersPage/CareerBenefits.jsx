import { motion } from "framer-motion";
import {
  Wallet,
  Laptop,
  GraduationCap,
  HeartHandshake,
  Plane,
  Trophy,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Wallet,
    title: "Competitive Salary",
    description:
      "We offer competitive compensation packages that reward your skills, dedication and impact.",
  },
  {
    id: 2,
    icon: Laptop,
    title: "Latest Equipment",
    description:
      "Work with modern hardware, premium software tools and the latest development technologies.",
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Learning Budget",
    description:
      "Access courses, certifications, conferences and continuous learning opportunities.",
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: "Health & Wellness",
    description:
      "We care about your wellbeing with a healthy work culture and employee-first policies.",
  },
  {
    id: 5,
    icon: Plane,
    title: "Flexible Time Off",
    description:
      "Enjoy paid leave, holidays and flexible schedules to maintain work-life balance.",
  },
  {
    id: 6,
    icon: Trophy,
    title: "Career Growth",
    description:
      "Take ownership of exciting projects, earn recognition and grow into leadership roles.",
  },
];

export default function CareerBenefits() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-5">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

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
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Employee Benefits

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            More Than

            <span className="block text-[#D4AF37]">

              Just A Job

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            We invest in our people by providing an environment
            where learning, innovation and wellbeing come first.

          </p>

        </motion.div>

        {/* Benefits Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (

              <motion.div
                key={benefit.id}
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
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[32px] border border-white/10 bg-[#0B0B0B] p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_45px_rgba(212,175,55,.18)]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]">

                  <Icon
                    size={30}
                    className="text-[#D4AF37] transition-all duration-300 group-hover:text-black"
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

        {/* Bottom Highlight */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .2,
            duration: .8,
          }}
          className="mt-20 rounded-[36px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#111111] to-[#0B0B0B] p-10 text-center"
        >

          <h3 className="text-3xl font-black text-white">

            Your Success Is

            <span className="text-[#D4AF37]">

              {" "}Our Success

            </span>

          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            At Riyadvi, you'll collaborate with passionate professionals,
            solve meaningful challenges, work with cutting-edge technology,
            and build solutions that make a real impact for clients worldwide.

          </p>

        </motion.div>

      </div>

    </section>
  );
}