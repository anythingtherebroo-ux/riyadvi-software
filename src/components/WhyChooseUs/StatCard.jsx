import CountUpModule from "react-countup";

const CountUp = CountUpModule.default ?? CountUpModule;

export default function StatCard({ stat }) {

  return (

    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-[#111111]
      p-6
      text-center
      transition-all
      duration-300
      hover:border-[#d4af37]/40
      "
    >

      <h3 className="mb-3 text-4xl font-bold text-[#d4af37]">

        <CountUp
          end={stat.value}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
        />

        {stat.suffix}

      </h3>

      <p className="text-sm text-gray-400">

        {stat.label}

      </p>

    </div>

  );

}