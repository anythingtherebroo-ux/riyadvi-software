import { motion } from "framer-motion";

export default function FeatureCard({ item, index }) {

  const Icon = item.icon;

  return (

    <motion.div

      initial={{ opacity:0,y:20 }}

      whileInView={{ opacity:1,y:0 }}

      viewport={{ once:true }}

      transition={{
        delay:index*.12
      }}

      className="group flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-1"

    >

      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-[#d4af37]/10
        text-[#d4af37]
        transition-transform
        duration-500
        group-hover:rotate-6
        "
      >

        <Icon size={28} />

      </div>

      <div>

        <h3 className="mb-2 text-xl font-bold text-white">

          {item.title}

        </h3>

        <p className="leading-7 text-gray-400">

          {item.description}

        </p>

      </div>

    </motion.div>

  );

}