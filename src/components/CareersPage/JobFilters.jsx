import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const departments = [
  "All",
  "Engineering",
  "Design",
  "AI",
  "Marketing",
  "Sales",
  "HR",
];

const jobTypes = [
  "All",
  "Full-Time",
  "Part-Time",
  "Internship",
  "Remote",
  "Hybrid",
];

export default function JobFilters({
  selectedDepartment,
  setSelectedDepartment,
  selectedType,
  setSelectedType,
}) {
  return (
    <section
      id="jobs"
      className="relative bg-black py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

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
            duration: 0.7,
          }}
          className="mb-16 text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-3">

            <Filter
              size={18}
              className="text-[#D4AF37]"
            />

            <span className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

              Find Your Role

            </span>

          </div>

          <h2 className="mt-8 text-5xl font-black text-white">

            Explore Open

            <span className="block text-[#D4AF37]">

              Opportunities

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Filter opportunities by department and employment type to
            discover the role that best matches your skills and ambitions.

          </p>

        </motion.div>

        {/* Department */}

        <div>

          <h3 className="mb-6 text-lg font-semibold text-white">

            Department

          </h3>

          <div className="flex flex-wrap gap-4">

            {departments.map((department) => (

              <motion.button
                key={department}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  setSelectedDepartment(department)
                }
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  selectedDepartment === department
                    ? "bg-[#D4AF37] text-black shadow-[0_0_30px_rgba(212,175,55,.35)]"
                    : "border border-white/10 bg-[#0B0B0B] text-gray-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                }`}
              >
                {department}
              </motion.button>

            ))}

          </div>

        </div>

        {/* Job Type */}

        <div className="mt-14">

          <h3 className="mb-6 text-lg font-semibold text-white">

            Employment Type

          </h3>

          <div className="flex flex-wrap gap-4">

            {jobTypes.map((type) => (

              <motion.button
                key={type}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  setSelectedType(type)
                }
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  selectedType === type
                    ? "bg-[#D4AF37] text-black shadow-[0_0_30px_rgba(212,175,55,.35)]"
                    : "border border-white/10 bg-[#0B0B0B] text-gray-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                }`}
              >
                {type}
              </motion.button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}