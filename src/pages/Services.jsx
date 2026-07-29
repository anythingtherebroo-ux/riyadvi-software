import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO/SEO";
import { services } from "../components/Servicepage/ServiceData";
import "./Services.css";

function Services() {
  const serviceList = Object.values(services);

  return (
    <>
      <SEO
        title="Our Services | Riyadvi Software Technologies"
        description="Web development, app development, digital marketing, AR/VR, 3D modeling and UI/UX design services from Riyadvi Software Technologies."
        keywords="software company, web development, app development, ui ux, digital marketing"
        url="https://riyadvi.com/services"
      />

      <MainLayout>
        <section className="services-index">
          <div className="services-index__inner">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="services-index__header"
            >
              <span className="services-index__eyebrow">
                <span className="services-index__eyebrow-dash" />
                Our Services
              </span>
              <h1 className="services-index__title">
                Everything You Need
                <span className="services-index__title-accent"> To Go Digital</span>
              </h1>
              <p className="services-index__subtext">
                From web and app development to design, marketing and
                immersive technology — explore each service in detail.
              </p>
            </motion.div>

            <div className="services-index__grid">
              {serviceList.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link to={`/services/${service.slug}`} className="services-index__card">
                    <span className="services-index__code">MOD / {String(index + 1).padStart(2, "0")}</span>
                    <service.icon size={26} className="services-index__icon" />
                    <h3>{service.title}</h3>
                    <p>{service.subtitle}</p>
                    <span className="services-index__link">
                      Learn More
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default Services;