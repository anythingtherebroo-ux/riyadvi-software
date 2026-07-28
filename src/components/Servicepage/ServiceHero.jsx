import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export default function ServiceHero({ service }) {
    const Icon = service.icon;

    return (
        <section className="relative overflow-hidden bg-black text-white">

            {/* Background */}
            <div className="absolute inset-0">

                <img
                    src={service.heroImage}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-15"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[#1a1a1a]" />

                <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/20 blur-[140px]" />

                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">

                {/* Breadcrumb */}

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="mb-8 flex items-center gap-2 text-sm text-gray-400"
                >

                    <Link
                        to="/"
                        className="transition hover:text-[#D4AF37]"
                    >
                        Home
                    </Link>

                    <ChevronRight size={16} />

                    <Link
                        to="/services"
                        className="transition hover:text-[#D4AF37]"
                    >
                        Services
                    </Link>

                    <ChevronRight size={16} />

                    <span className="text-[#D4AF37]">
                        {service.title}
                    </span>

                </motion.div>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                    >

                        <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-[#D4AF37]">

                            <Icon size={22} />

                            <span className="font-medium">
                                Premium Digital Solutions
                            </span>

                        </div>

                        <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

                            {service.title}

                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">

                            {service.subtitle}

                        </p>

                        <div className="mt-12 flex flex-wrap gap-5">

                            <button className="group rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]">

                                Get a Quote

                                <ArrowRight
                                    className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1"
                                    size={18}
                                />

                            </button>

                            <button className="rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]">

                                View Portfolio

                            </button>

                        </div>

                        <div className="mt-14 grid grid-cols-3 gap-6">

                            <div>

                                <h3 className="text-3xl font-bold text-[#D4AF37]">
                                    50+
                                </h3>

                                <p className="mt-2 text-gray-400">
                                    Projects Delivered
                                </p>

                            </div>

                            <div>

                                <h3 className="text-3xl font-bold text-[#D4AF37]">
                                    100%
                                </h3>

                                <p className="mt-2 text-gray-400">
                                    Client Focused
                                </p>

                            </div>

                            <div>

                                <h3 className="text-3xl font-bold text-[#D4AF37]">
                                    24/7
                                </h3>

                                <p className="mt-2 text-gray-400">
                                    Technical Support
                                </p>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.9,
                        }}
                    >

                        <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-8 backdrop-blur-xl">

                            <img
                                src={service.heroImage}
                                alt={service.title}
                                className="rounded-2xl shadow-2xl"
                            />

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}