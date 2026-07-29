import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial, index }) {
  const code = String(index + 1).padStart(2, "0");

  return (
    <article className="review-card">
      <div className="review-card__top">
        <span className="review-card__code">REVIEW / {code}</span>
        <div className="review-card__stars">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={13} fill="currentColor" />
          ))}
        </div>
      </div>

      <p className="review-card__quote">&ldquo;{testimonial.quote}&rdquo;</p>

      <div className="review-card__byline">
        <img src={testimonial.image} alt={testimonial.name} className="review-card__avatar" />
        <div>
          <h3 className="review-card__name">{testimonial.name}</h3>
          <p className="review-card__role">{testimonial.role}</p>
        </div>
      </div>

      <div className="review-card__project">{testimonial.project}</div>
    </article>
  );
}