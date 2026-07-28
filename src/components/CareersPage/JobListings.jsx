import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  Clock3,
  ArrowRight,
  Building2,
} from "lucide-react";

import { careers } from "./careersData";

export default function JobListings({
  selectedDepartment,
  selectedType,
}) {
  const filteredJobs = careers.filter((job) => {
    const departmentMatch =
      selectedDepartment === "All" ||
      job.department === selectedDepartment;

    const typeMatch =
      selectedType === "All" ||
      job.type === selectedType;

    return departmentMatch && typeMatch;
  });

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Empty State */}

        {filteredJobs.length === 0 && (

          <div className="rounded-3xl border border-white/10 bg-[#0B0B0B] py-20 text-center">

            <h3 className="text-3xl font-bold text-white">

              No Open Positions

            </h3>

            <p className="mx-auto mt-5 max-w-xl text-gray-400">

              We couldn't find any positions matching
              your selected filters.

            </p>

          </div>

        )}

        {/* Jobs */}

        <div className="space-y-8">

          {filteredJobs.map((job, index) => (

            <motion.div
              key={job.id}
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
                delay: index * .08,
                duration: .7,
              }}
              whileHover={{
                y: -5,
              }}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0B] p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,.18)]"
            >

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="flex-1">

                  <div className="flex flex-wrap gap-3">

                    <span className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">

                      {job.department}

                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">

                      {job.type}

                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">

                      {job.experience}

                    </span>

                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-white">

                    {job.title}

                  </h2>

                  <p className="mt-5 max-w-3xl leading-8 text-gray-400">

                    {job.description}

                  </p>

                  {/* Meta */}

                  <div className="mt-8 flex flex-wrap gap-8">

                    <div className="flex items-center gap-2 text-gray-400">

                      <MapPin
                        size={18}
                        className="text-[#D4AF37]"
                      />

                      {job.location}

                    </div>

                    <div className="flex items-center gap-2 text-gray-400">

                      <Building2
                        size={18}
                        className="text-[#D4AF37]"
                      />

                      {job.mode}

                    </div>

                    <div className="flex items-center gap-2 text-gray-400">

                      <Clock3
                        size={18}
                        className="text-[#D4AF37]"
                      />

                      {job.posted}

                    </div>

                  </div>

                  {/* Skills */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {job.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#D4AF37]"
                      >

                        {skill}

                      </span>

                    ))}

                  </div>

                </div>

                {/* Right */}

                <div className="flex flex-col items-start gap-6 lg:items-end">

                  <div className="text-right">

                    <p className="text-sm text-gray-400">

                      Salary

                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#D4AF37]">

                      {job.salary}

                    </h3>

                  </div>

                  <Link
                    to="#application"
                    className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-7 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.3)]"
                  >

                    Apply Now

                    <ArrowRight
                      size={18}
                      className="ml-2 transition group-hover:translate-x-1"
                    />

                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}