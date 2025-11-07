"use client";

import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Shield,
  BarChart3,
  Globe,
  Smartphone,
  GraduationCap,
  CheckCircle2,
  Phone,
  Mail,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Comprehensive cybersecurity solutions to protect your business from digital threats, including network audits and encryption.",
    features: ["Network Security", "Data Encryption", "Threat Detection", "Security Audits"],
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with predictive analytics, business intelligence, and visualization tools.",
    features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Statistical Analysis"],
    color: "from-indigo-600 to-indigo-800",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom, responsive, and scalable web solutions designed for performance, SEO, and a seamless user experience.",
    features: ["Responsive Design", "E-commerce", "CMS Development", "API Integration"],
    color: "from-cyan-600 to-cyan-800",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Build high-performance mobile apps for Android and iOS with engaging interfaces and optimized architecture.",
    features: ["iOS Apps", "Android Apps", "Cross-Platform", "Maintenance"],
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: GraduationCap,
    title: "Educational Projects",
    description:
      "Academic solutions like LMS platforms, e-learning portals, and research support for scholars and institutions.",
    features: ["LMS Solutions", "E-Learning", "Academic Writing", "Research Support"],
    color: "from-rose-600 to-rose-800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Creator Research</title>
        <meta
          name="description"
          content="Cybersecurity, Data Analytics, Web & App Development, and Educational Projects tailored to your success."
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <Navigation />

        {/* Services Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What We <span className="text-blue-900">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
              Comprehensive digital, analytical, and academic solutions tailored to your success.
            </p>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 text-left flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}
                      aria-hidden="true"
                    >
                      <service.icon className="text-white" size={32} aria-label={service.title} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center space-x-2 text-sm">
                          <CheckCircle2 className="text-blue-900" size={16} aria-hidden="true" />
                          <span className="text-gray-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose <span className="text-blue-900">Us?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine innovation, precision, and passion to deliver transformative research and digital solutions.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team with 10+ years of experience",
                  "Cutting-edge technology and best practices",
                  "Tailored solutions for every client",
                  "24/7 technical and research support",
                  "Transparent and fair pricing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <Zap className="text-blue-900 mt-1" size={20} aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-8 lg:p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Need a Custom Solution?</h3>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Let’s discuss your project and build a strategy that aligns with your goals and budget.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-300" size={24} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-blue-200">Call for consultation</p>
                    <p className="text-lg font-semibold">+91 9545415111</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-300" size={24} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-blue-200">Email for quote</p>
                    <p className="text-lg font-semibold">info@creatorresearch.com</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <button className="w-full bg-white text-blue-900 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                  Request a Quote
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
