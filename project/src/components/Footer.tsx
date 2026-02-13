import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 dark:from-slate-950 to-black dark:to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Softcraft Technologies" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold">Softcraft Technologies</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">Professional-grade solutions across renewable energy, amusement systems, security, and industrial automation.</p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50 group"
                  >
                    <Icon size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded"></div>
              Services
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#services" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Solar & Renewable
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Amusement Rides
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  CCTV Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  Industrial Automation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded"></div>
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition flex items-center gap-2 group">
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded"></div>
              Contact
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="tel:+234814294672" className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-gray-800 group-hover:bg-blue-600 rounded-lg transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <span className="group-hover:text-blue-400 transition">+234 (814) 294 6722</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:services@softcraft-technologies.com" className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-gray-800 group-hover:bg-blue-600 rounded-lg transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <span className="group-hover:text-blue-400 transition">services@softcraft-technologies.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="p-2 bg-gray-800 group-hover:bg-blue-600 rounded-lg transition-colors mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <span className="group-hover:text-blue-400 transition">Worldwide Services</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left text-gray-400 text-sm">
              © {currentYear} Softcraft Technologies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
