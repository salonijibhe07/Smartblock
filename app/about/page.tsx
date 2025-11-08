"use client";
import React, { useState } from "react";
import {
  Target,
  Rocket,
  Users,
  Award,
  HeadphonesIcon,
  DollarSign,
  BookOpen,
  BarChart,
  Globe,
  CheckCircle2,
  Phone,
  Star,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function AboutPage() {
  const highlights = [
    { icon: Award, title: "Award Winning", description: "Recognized for excellence in research services" },
    { icon: Users, title: "Professional Staff", description: "Highly qualified PhD holders and experts" },
    { icon: HeadphonesIcon, title: "24/7 Support", description: "Round-the-clock assistance for all clients" },
    { icon: DollarSign, title: "Fair Prices", description: "Competitive pricing with transparent costs" },
  ];

  const services = [
    "PhD Topic Selection",
    "Research Proposal Writing",
    "Thesis Writing",
    "Statistics Help using SPSS",
    "Thesis and Paper Review",
    "Research Paper Writing",
    "Publication Support",
    "PhD Thesis Editing & Proofreading",
  ];

  const teamExpertise = [
    { icon: BookOpen, title: "PhD Holders", count: "" },
    { icon: Users, title: "Academic Writers", count: "" },
    { icon: BarChart, title: "Statisticians", count: "" },
    { icon: Globe, title: "Research Fields", count: "" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Navigation added instead of Hero */}
      <Navigation />

      {/* About Header Section */}
      <section className="py-24 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            The Best Research Solution With 10 Years of Experience — empowering academic excellence through
            dedicated research support and innovation.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-32 relative z-10">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-3 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Welcome to <span className="text-blue-900">Creator Research Pvt Ltd</span>
            </h2>
          </div>
          
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-xl leading-relaxed">
              To become a global leader in PhD research services, offering innovative and practical research solutions that advance knowledge worldwide.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-xl leading-relaxed">
              To deliver high-quality, tailored research services that empower our clients to achieve academic excellence and impactful publications.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-blue-900">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We offer research support from topic selection to publication — every step tailored to your goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-900 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-blue-900">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our team of PhD experts, statisticians, and academic writers collaborate to ensure excellence at every stage.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We have PhD holders, academic writers, statisticians, and editors who provide comprehensive research services. Our members are dedicated to delivering high-quality work and exceptional service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate and purpose-driven, we’re here to help clients succeed academically and professionally.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamExpertise.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className="mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold mb-2">{item.count}</div>
                  <div className="text-sm text-blue-200">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 rounded-2xl p-12 text-white text-center">
            <Star className="mx-auto mb-6 w-16 h-16 text-yellow-400" />
            <h3 className="text-3xl font-bold mb-4">Join Our Success Story</h3>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Reach out today to discover how we can assist you in achieving your research goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919545415111"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>+91 9545415111</span>
              </a>
              <a
                href="/contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
