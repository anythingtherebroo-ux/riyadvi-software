import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Globe,
  Trophy,
  Code2,
} from "lucide-react";

const timeline = [
  {
    year: "2021",
    title: "Company Founded",
    description:
      "Riyadvi Software Technologies was established with a vision to create innovative digital solutions for modern businesses.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Growing Client Base",
    description:
      "Successfully delivered multiple web and mobile projects while building strong relationships with startups and SMEs.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Service Expansion",
    description:
      "Expanded into UI/UX Design, Digital Marketing, AR/VR solutions and enterprise software development.",
    icon: Globe,
  },
  {
    year: "2024",
    title: "Recognition",
    description:
      "Achieved consistent client satisfaction through scalable, secure and performance-driven digital products.",
    icon: Trophy,
  },
  {
    year: "Future",
    title: "Innovation Continues",
    description:
      "Continuing to build world-class digital experiences powered by AI, cloud technologies and modern frameworks.",
    icon: Code2,
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24 text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Company Journey

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Our

            <span className="text-[#D4AF37]">
              {" "}Timeline
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Every milestone reflects our commitment to innovation,
            quality and long-term partnerships.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/60 to-transparent lg:block" />

          <div className="space-y-14">

            {timeline.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: .7,
                    delay: index * .15,
                  }}
                  className="relative flex flex-col gap-8 lg:flex-row"
                >

                  {/* Icon */}

                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

                    <Icon
                      size={30}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  {/* Card */}

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    className="flex-1 rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/10"
                  >

                    <span className="inline-flex rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">

                      {item.year}

                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-5 text-lg leading-8 text-gray-400">

                      {item.description}

                    </p>

                  </motion.div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}