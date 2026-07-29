import CountUpModule from "react-countup";

const CountUp = CountUpModule.default ?? CountUpModule;

export default function StatCard({ stat }) {
  return (
    <div className="stat-cell">
      <h3 className="stat-cell__number">
        <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
        {stat.suffix}
      </h3>
      <p className="stat-cell__label">{stat.label}</p>
    </div>
  );
}