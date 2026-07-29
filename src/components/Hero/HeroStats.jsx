import { stats } from "./heroData";
import "./HeroStats.css";

function HeroStats() {
  return (
    <div className="hero-stats">
      {stats.map((item, i) => (
        <div className="hero-stats__item" key={item.id}>
          <h2 className="hero-stats__number">{item.number}</h2>
          <p className="hero-stats__label">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;