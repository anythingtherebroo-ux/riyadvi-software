import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Mohamed Riyaz",
    role: "Founder & CEO",
    image: "/images/team/ceo.jpg",
    bio: "Passionate about building innovative digital products and helping businesses grow through technology.",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    id: 2,
    name: "John David",
    role: "Lead Full Stack Developer",
    image: "/images/team/developer.jpg",
    bio: "Building scalable web applications with React, Node.js and cloud technologies.",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    id: 3,
    name: "Sophia Wilson",
    role: "UI / UX Designer",
    image: "/images/team/designer.jpg",
    bio: "Designing intuitive user experiences and modern interfaces for digital products.",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    id: 4,
    name: "Ahamed Ali",
    role: "Digital Marketing Specialist",
    image: "/images/team/marketing.jpg",
    bio: "Helping brands reach the right audience through SEO, social media and performance marketing.",
    linkedin: "#",
    github: "#",
    email: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

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
            Meet Our Team
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            The People Behind
            <span className="block text-[#D4AF37]">Riyadvi</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Our multidisciplinary team combines creativity,
            engineering and strategy to deliver world-class
            digital solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0B] transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,.18)]"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Content */}

              <div className="p-8">
                <span className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
                  {member.role}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {member.bio}
                </p>

                {/* Social */}

                <div className="mt-8 flex gap-4">
                  <a
                    href={member.linkedin}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <FaLinkedin size={18} />
                  </a>

                  <a
                    href={member.github}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <Mail size={18} />
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