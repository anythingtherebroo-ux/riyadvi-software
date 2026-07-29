import { ArrowUpRight } from "lucide-react";
import "./PortfolioCard.css";

const PortfolioCard = ({ project, index }) => {
  const code = String(index + 1).padStart(2, "0");

  return (
    <div className="case-card">
      <div className="case-card__media">
        <img
          src={project.image}
          alt={project.title}
          className="case-card__image"
        />
        <span className="case-card__category">{project.category}</span>
        <span className="case-card__code">{code}</span>
      </div>

      <div className="case-card__body">
        <h3 className="case-card__title">{project.title}</h3>
        <p className="case-card__desc">{project.description}</p>

        {project.technologies && (
          <div className="case-card__tags">
            {project.technologies.slice(0, 3).map((tech) => (
              <span className="case-card__tag" key={tech}>{tech}</span>
            ))}
          </div>
        )}

        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="case-card__link">
            View Project <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;