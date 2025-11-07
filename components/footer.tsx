import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="font-bold text-white mb-4">Creator Research</h4>
            <p className="text-sm text-slate-400">
              Empowering businesses through innovative digital solutions and technology.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#cyber-security" className="hover:text-white transition">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link href="#data-analytics" className="hover:text-white transition">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="#web-development" className="hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#educational-projects" className="hover:text-white transition">
                  Educational Projects
                </Link>
              </li>
              <li>
                <Link href="#app-development" className="hover:text-white transition">
                  App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Connect */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-400">
            © 2025 Creator Research Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* Smooth Scroll Script */}
      <style jsx>{`
        a[href^="#"] {
          scroll-behavior: smooth;
        }
      `}</style>
    </footer>
  );
}
