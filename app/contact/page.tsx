"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import Navigation from "@/components/navigation"; // ✅ Import Navigation component
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9545415111",
      subtitle: "Call to ask any question",
      link: "tel:+919545415111",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@creatorresearch.com",
      subtitle: "Email to get free quote",
      link: "mailto:info@creatorresearch.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "73 Pannalal Nagar",
      subtitle: "Ch. Sambhaji Nagar, India",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Replaced Hero with Navigation */}
      <Navigation />

     

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Welcome to Our Company!
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a team of experienced professionals providing high-quality research and academic writing services for PhD students and scholars worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-300 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Call to ask any question</p>
                    <a href="tel:+919545415111" className="text-xl text-blue-200 hover:text-white transition-colors">
                      +91 9545415111
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-300 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Email to get free quote</p>
                    <a href="mailto:info@creatorresearch.com" className="text-xl text-blue-200 hover:text-white transition-colors break-all">
                      info@creatorresearch.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-300 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Visit our office</p>
                    <p className="text-blue-200">73 Pannalal Nagar</p>
                    <p className="text-blue-200">Ch. Sambhaji Nagar, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Choose Us?
              </h3>
              <div className="space-y-3">
                {[
                  "10+ Years of Experience",
                  "Expert Team of Professionals",
                  "Quality Research Services",
                  "Timely Delivery",
                  "24/7 Customer Support",
                  "Competitive Pricing",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-blue-900 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form and we’ll get back to you shortly.
            </p>

            <div className="space-y-6">
              {["name", "email", "phone", "subject"].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 capitalize">
                    {field} *
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    placeholder={`Enter your ${field}`}
                    className="w-full pl-4 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors text-gray-900"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your research needs..."
                  rows={5}
                  className="w-full pl-4 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors resize-none text-gray-900"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-900 to-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>

              {submitted && (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-center space-x-3 animate-fadeIn">
                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                  <span className="text-green-800 font-semibold">
                    Thank you! We’ll contact you soon.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
