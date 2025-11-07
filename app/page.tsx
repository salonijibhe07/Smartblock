"use client";

import {
  ArrowRight,
  BookOpen,
  Code2,
  Brain,
  Users,
  Lightbulb,
  ExternalLink, // ✅ this was missing
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";


export default function Home() {
  // Load Google Fonts dynamically (Poppins + Playfair Display)
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const domains = [
    {
      id: 1,
      title: "Creator Research",
      description:
        "Professional PhD research services and academic writing support.",
      icon: BookOpen,
      website: "https://www.creatorresearch.com/",
      color: "from-blue-100 to-blue-50",
      accentColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Profile Portfolio",
      description:
        "Showcase your professional portfolio with a stunning personal website.",
      icon: Users,
      website: "https://personalporfolio.creatorresearch.com/",
      color: "from-purple-100 to-purple-50",
      accentColor: "text-purple-600",
    },
    {
      id: 3,
      title: "Creator IT",
      description:
        "Innovative IT solutions and software development services.",
      icon: Code2,
      website: "https://www.creatorit.in/",
      color: "from-emerald-100 to-emerald-50",
      accentColor: "text-emerald-600",
    },
    {
      id: 4,
      title: "Internship & Project",
      description:
        "Connect students with real-world experience and career growth.",
      icon: Lightbulb,
      website: "https://internshipandproject.creatorresearch.com/",
      color: "from-amber-100 to-amber-50",
      accentColor: "text-amber-600",
    },
    {
      id: 5,
      title: "LMS Platform",
      description:
        "Comprehensive learning management system for online education.",
      icon: Brain,
      website: "https://lms-ubdc.vercel.app/",
      color: "from-rose-100 to-rose-50",
      accentColor: "text-rose-600",
    },
  ];

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Navigation />
      <Hero />

      {/* Domains Section */}
      <section className="py-14 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Our Digital Ecosystem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our suite of digital solutions and services — each one a
            testament to our innovation and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`rounded-2xl p-8 shadow-md bg-gradient-to-br ${domain.color} hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center mb-3">
                <domain.icon className={`w-8 h-8 ${domain.accentColor} mr-3`} />
                <h3
                  className={`text-2xl font-semibold ${domain.accentColor}`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {domain.title}
                </h3>
              </div>
              <p className="text-slate-700 mb-5 leading-relaxed">
                {domain.description}
              </p>
              <Button
                onClick={() => window.open(domain.website, "_blank")}
                className="bg-white text-slate-900 border border-gray-200 hover:bg-gray-100 flex items-center gap-2"
              >
                Visit <ExternalLink size={16} />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 md:p-14 text-center text-white shadow-2xl">
          <h3
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Transform Your Vision?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Let Creator Research Pvt. Ltd. be your partner in building innovative digital solutions.
          </p>

          {/* Redirect to Contact Page */}
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
