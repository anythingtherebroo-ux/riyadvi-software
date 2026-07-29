import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./TeamSection.css";

// TODO: replace image with a real photo and add real linkedin/github/email
// links once available. Until then this renders an initials placeholder.
const team = [
  { id: 1, name: "Mohamed Riyaz", role: "Founder & CEO", image: "/images/team/ceo.jpg", bio: "Passionate about building innovative digital products and helping businesses grow through technology.", linkedin: "#", github: "#", email: "#" },
  { id: 2, name: "John David", role: "Lead Full Stack Developer", image: "/images/team/developer.jpg", bio: "Building scalable web applications with React, Node.js and cloud technologies.", linkedin: "#", github: "#", email: "#" },
  { id: 3, name: "Sophia Wilson", role: "UI / UX Designer", image: "/images/team/designer.jpg", bio: "Designing intuitive user experiences and modern interfaces for digital products.", linkedin: "#", github: "#", email: "#" },
  { id: 4, name: "Ahamed Ali", role: "Digital Marketing Specialist", image: "/images/team/marketing.jpg", bio: "Helping brands reach the right audience through SEO, social media and performance marketing.", linkedin: "#", github: "#", email: "#" },
];

const initials = (name) =>
  name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="team-section__header"
        >
          <span className="team-section__eyebrow">
            <span className="team-section__eyebrow-dash" />
            Meet Our Team
          </span>
          <h2 className="team-section__title">
            The People Behind <span className="team-section__title-accent">Riyadvi</span>
          </h2>
          <p className="team-section__subtext">
            Our multidisciplinary team combines creativity, engineering and
            strategy to deliver world-class digital solutions.
          </p>
        </motion.div>

        <div className="team-section__grid">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="team-card"
            >
              <div className="team-card__avatar">{initials(member.name)}</div>

              <span className="team-card__role">{member.role}</span>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__bio">{member.bio}</p>

              <div className="team-card__social">
                <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`}>
                  <FaLinkedin size={16} />
                </a>
                <a href={member.github} aria-label={`${member.name} on GitHub`}>
                  <FaGithub size={16} />
                </a>
                <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}