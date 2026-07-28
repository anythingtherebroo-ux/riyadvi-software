import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Plane,
  Factory,
  Home,
  Dumbbell,
  Gamepad2,
  Stethoscope,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const industryIcons = {
  Healthcare: HeartPulse,
  Education: GraduationCap,
  Finance: Landmark,
  Retail: ShoppingBag,
  Travel: Plane,
  Manufacturing: Factory,
  "Real Estate": Home,
  Startups: Briefcase,
  Fitness: Dumbbell,
  Gaming: Gamepad2,
  Construction: Building2,
  SaaS: Stethoscope,
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Industries({ service }) {
  return (
    <section className="relative overflow-hidden bg-[#070707] py-28 text-white">

      {/* Glow */}

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

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
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Industry Expertise
          </span>

          <h2 className="mt-8 text-4xl font-black lg:text-5xl">
            Solutions Built For
            <span className="text-[#D4AF37]"> Every Industry</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Every business has unique challenges. Our team develops customised
            digital solutions designed specifically for your industry.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent lg:block" />

          <div className="space-y-10">

            {service.industries.map((industry, index) => {

              const Icon =
                industryIcons[industry] || Building2;

              const reverse = index % 2 !== 0;

              return (

                <motion.div
                  key={industry}
                  variants={card}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`flex flex-col items-center gap-10 lg:flex-row ${
                    reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >

                  {/* Card */}

                  <div className="w-full lg:w-5/12">

                    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">

                        <Icon size={30} />

                      </div>

                      <h3 className="mt-8 text-3xl font-bold">
                        {industry}
                      </h3>

                      <p className="mt-5 leading-8 text-gray-400">
                        We create scalable digital products tailored for the
                        {` ${industry}`} industry, helping businesses automate
                        operations, increase customer engagement and accelerate
                        business growth.
                      </p>

                      <button className="mt-8 flex items-center gap-2 font-semibold text-[#D4AF37] transition hover:gap-4">

                        Explore Solutions

                        <ArrowRight size={18} />

                      </button>

                    </div>

                  </div>

                  {/* Timeline Dot */}

                  <div className="hidden h-6 w-6 rounded-full border-4 border-[#D4AF37] bg-black lg:block" />

                  {/* Empty Side */}

                  <div className="hidden lg:block lg:w-5/12" />

                </motion.div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}