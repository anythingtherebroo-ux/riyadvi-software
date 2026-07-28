import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaUsers,
} from "react-icons/fa";

import portfolioData from "./portfolioData";
import PortfolioCard from "./PortfolioCard";
import PortfolioFilter from "./PortfolioFilter";


const Portfolio = () => {

  const [activeCategory, setActiveCategory] = useState("All");



  const categories = useMemo(() => {

    return [
      "All",
      ...new Set( portfolioData.map((project) => project.category) ),
    ];

  }, []);




  const filteredProjects = useMemo(() => {

    if (activeCategory === "All") {
      return portfolioData;
    }


    return portfolioData.filter(
      (project) => project.category === activeCategory
    );

  }, [activeCategory]);




  return (

    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#080808] py-24"
    >


      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[170px]" />




      <div className="mx-auto max-w-7xl px-6">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold text-[#D4AF37]">
            <FaBriefcase />
            Our Portfolio
          </span>



          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Crafting Digital
            <span className="block text-[#D4AF37]">
              Success Stories
            </span>
          </h2>



          <p className="mt-8 text-lg leading-8 text-gray-400">
            Explore a selection of projects that demonstrate our expertise in
            creating modern, scalable and visually engaging digital solutions.
          </p>

        </motion.div>




        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >

          <div className="rounded-3xl border border-[#2A2A2A] bg-[#121212] p-8 text-center">
            <FaBriefcase className="mx-auto mb-5 text-3xl text-[#D4AF37]" />
            <h3 className="text-4xl font-bold text-white">150+</h3>
            <p className="mt-3 text-gray-400">Projects Delivered</p>
          </div>



          <div className="rounded-3xl border border-[#2A2A2A] bg-[#121212] p-8 text-center">
            <FaUsers className="mx-auto mb-5 text-3xl text-[#D4AF37]" />
            <h3 className="text-4xl font-bold text-white">98%</h3>
            <p className="mt-3 text-gray-400">Client Satisfaction</p>
          </div>



          <div className="rounded-3xl border border-[#2A2A2A] bg-[#121212] p-8 text-center">
            <FaCode className="mx-auto mb-5 text-3xl text-[#D4AF37]" />
            <h3 className="text-4xl font-bold text-white">12+</h3>
            <p className="mt-3 text-gray-400">Technologies Used</p>
          </div>

        </motion.div>




        <div className="mt-20">
          <PortfolioFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>




        <motion.div
          layout
          className="grid gap-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>




        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >

          <h3 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Build Your Next Project?
          </h3>



          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Whether it's a startup, enterprise platform or custom web
            application, we're ready to transform your ideas into a premium
            digital experience.
          </p>



          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-9 py-4 font-semibold text-black shadow-[0_0_35px_rgba(212,175,55,.35)] transition"
          >
            Start Your Project
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
};

export default Portfolio;