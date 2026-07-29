import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Mohamed Riyaz",
    role: "Founder & CEO",
    bio: "Passionate about building innovative digital products and helping businesses grow through technology.",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    id: 2,
    name: "John David",
    role: "Lead Full Stack Developer",
    bio: "Building scalable web applications with React, Node.js and cloud technologies.",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    id: 3,
    name: "Sophia Wilson",
    role: "UI / UX Designer",
    bio: "Designing intuitive user experiences and modern interfaces for digital products.",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    id: 4,
    name: "Ahamed Ali",
    role: "Digital Marketing Specialist",
    bio: "Helping brands reach the right audience through SEO, social media and performance marketing.",
    linkedin: "#",
    github: "#",
    email: "#",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function TeamSection() {
  return (
    <section className="bg-[#080808] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-3 uppercase tracking-[4px] text-sm font-semibold text-[#D4AF37]">

            <span className="h-px w-10 bg-[#D4AF37]" />

            Meet Our Team
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            The People Behind{" "}
            <span className="text-[#D4AF37]">
              Riyadvi
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Our multidisciplinary team combines creativity,
            engineering and business strategy to build
            premium digital products.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {team.map((member, index) => (

            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-[#262626] bg-[#111111] p-8 transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,.12)]"
            >

              {/* Avatar */}

              <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-600 text-3xl font-bold text-black shadow-lg">

                {initials(member.name)}

              </div>

              <p className="text-center text-sm uppercase tracking-wider text-[#D4AF37]">
                {member.role}
              </p>

              <h3 className="mt-3 text-center text-2xl font-semibold text-white">
                {member.name}
              </h3>

              <p className="mt-5 text-center text-sm leading-7 text-gray-400">
                {member.bio}
              </p>

              {/* Social */}

              <div className="mt-8 flex justify-center gap-4">

                <a
                  href={member.linkedin}
                  className="rounded-full border border-[#2a2a2a] p-3 text-gray-400 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href={member.github}
                  className="rounded-full border border-[#2a2a2a] p-3 text-gray-400 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="rounded-full border border-[#2a2a2a] p-3 text-gray-400 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                >
                  <Mail size={18} />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}