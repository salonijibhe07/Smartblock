"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 md:py-24 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-6 inline-block">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
            Welcome to Digital Innovation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-serif leading-tight">
          Discover Excellence in{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Creator Research Pvt. Ltd. brings together expertise, innovation, and technology to transform your ideas into
          reality.
        </p>
      </div>
    </section>
  );
}
