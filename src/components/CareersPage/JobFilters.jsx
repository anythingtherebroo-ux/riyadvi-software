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
    <section id="jobs" className="relative bg-[#080808] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] sm:text-sm">
            <Filter size={16} />
            <span>Find Your Role</span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Explore Open <span className="text-[#d4af37]">Opportunities</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
            Filter opportunities by department and employment type to discover
            the role that best matches your skills and ambitions.
          </p>
        </motion.div>

        {/* Department Filter */}
        <div>
          <h3 className="mb-4 font-poppins text-sm font-semibold uppercase tracking-wider text-gray-400">
            Department
          </h3>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {departments.map((department) => (
              <motion.button
                key={department}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedDepartment(department)}
                className={`rounded-full px-5 py-2.5 font-poppins text-xs font-semibold sm:text-sm transition-all duration-300 ${
                  selectedDepartment === department
                    ? "bg-[#d4af37] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                    : "border border-white/10 bg-white/[0.04] text-gray-300 hover:border-[#d4af37]/40 hover:text-white"
                }`}
              >
                {department}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Job Type Filter */}
        <div className="mt-10">
          <h3 className="mb-4 font-poppins text-sm font-semibold uppercase tracking-wider text-gray-400">
            Employment Type
          </h3>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {jobTypes.map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-5 py-2.5 font-poppins text-xs font-semibold sm:text-sm transition-all duration-300 ${
                  selectedType === type
                    ? "bg-[#d4af37] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                    : "border border-white/10 bg-white/[0.04] text-gray-300 hover:border-[#d4af37]/40 hover:text-white"
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