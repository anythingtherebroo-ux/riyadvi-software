import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Code,
  Calendar,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";


export default function PortfolioDetails() {


  const { id } = useParams();


  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    fetchProject();

  }, [id]);




  const fetchProject = async () => {


    try {

      const response = await fetch(
        `http://localhost:5000/api/portfolio/${id}`
      );


      const data = await response.json();


      if (data.success) {
        setProject(data.data);
      }


    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

  };




  if (loading) {
    return (
      <MainLayout>
        <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
          Loading project...
        </div>
      </MainLayout>
    );
  }



  if (!project) {
    return (
      <MainLayout>
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white">
          <h1 className="text-3xl font-bold">Project not found</h1>

          <Link
            to="/portfolio"
            className="mt-6 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black"
          >
            Back to Portfolio
          </Link>
        </div>
      </MainLayout>
    );
  }



  return (
    <>

      <SEO
        title={`${project.title} | Riyadvi Portfolio`}
        description={project.description}
        keywords={`${project.category}, ${project.tech}, Riyadvi portfolio`}
        url={`https://riyadvi.com/portfolio/${project._id}`}
      />



      <MainLayout>

        <section className="relative overflow-hidden bg-[#050505] py-24 text-white">


          {/* Background Glow */}

          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[170px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[170px]" />




          <div className="relative mx-auto max-w-6xl px-6">


            {/* Back Button */}

            <Link
              to="/portfolio"
              className="mb-10 inline-flex items-center gap-2 text-[#D4AF37] transition hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>




            {/* Header */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >

              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold text-[#D4AF37]">
                <Layers size={16} />
                {project.category}
              </span>



              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {project.title}
              </h1>



              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-gray-400">

                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#D4AF37]" />
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>



                <div className="flex items-center gap-2">
                  <Code size={16} className="text-[#D4AF37]" />
                  {project.tech || "Modern Web Stack"}
                </div>

              </div>

            </motion.div>




            {/* Hero Image */}

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0B] shadow-[0_0_60px_rgba(212,175,55,.12)]"
            >

              <img
                src={
                  project.image ||
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                }
                alt={project.title}
                className="h-[420px] w-full object-cover"
              />

            </motion.div>




            {/* Content */}

            <div className="mt-16 grid gap-10 lg:grid-cols-[2fr_1fr]">




              {/* Main Content */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-10"
              >

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Project Overview
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-gray-300">
                    {project.description}
                  </p>
                </div>



                <div className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-8">
                  <h3 className="text-2xl font-bold text-white">
                    The Challenge
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    The client needed a scalable, high-performance digital solution
                    capable of delivering a seamless user experience while supporting
                    future business growth and operational efficiency.
                  </p>
                </div>



                <div className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-8">
                  <h3 className="text-2xl font-bold text-white">
                    Our Solution
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    Riyadvi designed and developed a modern solution using contemporary
                    frontend and backend technologies, focusing on performance, responsive
                    design, clean architecture, and maintainable code standards.
                  </p>
                </div>



                <div className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-8">
                  <h3 className="text-2xl font-bold text-white">
                    Results
                  </h3>

                  <ul className="mt-5 space-y-3 text-gray-400">
                    <li>• Improved user engagement and usability</li>
                    <li>• Faster page load performance</li>
                    <li>• Mobile-first responsive experience</li>
                    <li>• Scalable architecture for future expansion</li>
                  </ul>
                </div>

              </motion.div>




              {/* Sidebar */}

              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >

                <div className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-7">
                  <h3 className="text-xl font-bold text-white">
                    Project Info
                  </h3>



                  <div className="mt-6 space-y-5">

                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500">
                        Category
                      </p>

                      <p className="mt-2 font-medium text-white">
                        {project.category}
                      </p>
                    </div>



                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500">
                        Technologies
                      </p>

                      <p className="mt-2 font-medium text-white">
                        {project.tech || "React, Node.js, MongoDB"}
                      </p>
                    </div>



                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500">
                        Published
                      </p>

                      <p className="mt-2 font-medium text-white">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                  </div>
                </div>



                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-[#D4AF37] px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Visit Live Project
                    <ExternalLink size={18} />
                  </a>
                )}



                <div className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-7">
                  <h3 className="text-xl font-bold text-white">
                    Need Something Similar?
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    We help startups and enterprises build premium web applications,
                    dashboards, e-commerce platforms, and custom digital products.
                  </p>



                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-[#D4AF37]/40 px-5 py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                  >
                    Start Your Project
                  </Link>
                </div>

              </motion.aside>

            </div>

          </div>

        </section>

      </MainLayout>
    </>
  );
}