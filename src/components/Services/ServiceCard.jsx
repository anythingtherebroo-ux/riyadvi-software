import { ArrowRight } from "lucide-react";
import "./ServiceCard.css";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const code = String(index + 1).padStart(2, "0");

  return (
    <div className="service-card">
      <div className="service-card__accent" />

      <div className="service-card__top">
        <span className="service-card__code">MOD / {code}</span>
        <Icon size={22} className="service-card__icon" />
      </div>

      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>

      <button className="service-card__cta">
        Get a Quote
        <ArrowRight size={16} className="service-card__cta-arrow" />
      </button>
    </div>
  );
}