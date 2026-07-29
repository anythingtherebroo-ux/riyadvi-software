import { motion } from "framer-motion";
import { coreValues } from "./aboutData";

const promiseStats = [
  { value: "100%", label: "Transparent Communication" },
  { value: "24/7", label: "Dedicated Support" },
  { value: "Agile", label: "Development Process" },
  { value: "Long-Term", label: "Client Partnerships" },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#D4AF37]">
              Our Core Values
            </span>
          </div>

          <h2 className="font-poppins text-4xl font-bold text-white md:text-5xl">
            Principles That
            <span className="text-[#D4AF37]">
              {" "}Drive Everything
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Every decision we make is guided by these values,
            helping us build premium digital products,
            long-term partnerships and measurable business growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-[#2A2A2A] bg-[#141414]/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_25px_70px_rgba(212,175,55,.12)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition duration-500 group-hover:bg-[#D4AF37] group-hover:text-black">
                <value.icon size={28} />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {value.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-24 overflow-hidden rounded-[32px] border border-[#2A2A2A] bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212]"
        >
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Left */}
            <div className="p-10 lg:p-14">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Our Promise
              </span>

              <h3 className="mt-5 font-poppins text-4xl font-bold text-white">
                Values That Shape
                <span className="text-[#D4AF37]">
                  {" "}Every Project
                </span>
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                From planning and strategy to launch and long-term support,
                our values remain at the heart of every project we deliver.
              </p>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 border-l border-[#2A2A2A]">

              {promiseStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-center border-b border-r border-[#2A2A2A] p-8 last:border-r-0 even:border-r-0"
                >
                  <h4 className="font-poppins text-4xl font-bold text-[#D4AF37]">
                    {stat.value}
                  </h4>

                  <p className="mt-3 text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}