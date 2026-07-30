import { motion } from "framer-motion";
import { MapPin, Clock3, ArrowRight, Building2 } from "lucide-react";
import { careers } from "./careersData";

export default function JobListings({ selectedDepartment, selectedType }) {
  const filteredJobs = careers.filter((job) => {
    const departmentMatch =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const typeMatch =
      selectedType === "All" || job.type === selectedType;

    return departmentMatch && typeMatch;
  });

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] py-16 text-center backdrop-blur-xl">
            <h3 className="font-poppins text-2xl font-bold text-white">
              No Open Positions Found
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">
              We couldn't find any positions matching your selected filters.
              Try selecting another department or type.
            </p>
          </div>
        )}

        {/* Job Cards */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)] sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Left Job Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2.5">
                    <span className="rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 px-3.5 py-1 text-xs font-semibold text-[#d4af37]">
                      {job.department}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-gray-300">
                      {job.type}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-gray-300">
                      {job.experience}
                    </span>
                  </div>

                  <h2 className="mt-5 font-poppins text-2xl font-extrabold text-white transition duration-300 group-hover:text-[#d4af37] sm:text-3xl">
                    {job.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {job.description}
                  </p>

                  {/* Meta Details */}
                  <div className="mt-6 flex flex-wrap gap-6 text-xs sm:text-sm text-gray-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-[#d4af37]" />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Building2 size={15} className="text-[#d4af37]" />
                      <span>{job.mode}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock3 size={15} className="text-[#d4af37]" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1 text-xs text-[#d4af37]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Salary & Apply CTA */}
                <div className="flex flex-col items-start gap-4 lg:items-end lg:justify-between">
                  <div className="lg:text-right">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                      Salary
                    </p>
                    <h3 className="mt-1 font-poppins text-xl font-bold text-[#d4af37] sm:text-2xl">
                      {job.salary}
                    </h3>
                  </div>

                  <a
                    href="#application"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  >
                    <span>Apply Now</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}