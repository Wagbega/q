import { ArrowRight, Zap, Shield, Wrench, Lightbulb, Cog } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useTheme } from '../context/ThemeContext';

export function Hero() {
  const [heroImageUrl, setHeroImageUrl] = useState('https://images.pexels.com/photos/3962671/pexels-photo-3962671.jpeg?auto=compress&cs=tinysrgb&w=1200');
  const { isDark } = useTheme();

  useEffect(() => {
    const fetchHeroSettings = async () => {
      const { data, error } = await supabase
        .from('hero_settings')
        .select('hero_image_url')
        .maybeSingle();

      if (!error && data?.hero_image_url) {
        setHeroImageUrl(data.hero_image_url);
      }
    };

    fetchHeroSettings();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden dark:bg-slate-900"
      style={{
        backgroundImage: isDark ? undefined : `url('${heroImageUrl}')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`absolute inset-0 ${isDark ? 'bg-slate-900/85' : 'bg-black/55'} backdrop-blur-sm`}></div>

      <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delay"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp" style={{ animation: 'slideUp 0.8s ease-out' }}>
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 rounded-full backdrop-blur-sm hover:border-blue-300/80 transition-colors duration-300">
              <span className="text-blue-100 text-sm font-semibold tracking-wide">Industry Leading Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Professional <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Solutions</span> for Modern Industries
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow max-w-xl">
              From renewable energy systems to amusement park rides, CCTV installations, and industrial automation—we deliver professional-grade solutions with expert installation, maintenance, and 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
              >
                Get Started <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                Explore Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex flex-col items-start gap-3 group cursor-pointer">
                <div className="p-3 bg-blue-500/30 rounded-lg group-hover:bg-blue-500/50 transition-colors duration-300">
                  <Zap size={20} className="text-blue-100" />
                </div>
                <span className="text-sm font-semibold text-gray-100 group-hover:text-white transition-colors">24/7 Support</span>
              </div>
              <div className="flex flex-col items-start gap-3 group cursor-pointer">
                <div className="p-3 bg-blue-500/30 rounded-lg group-hover:bg-blue-500/50 transition-colors duration-300">
                  <Shield size={20} className="text-blue-100" />
                </div>
                <span className="text-sm font-semibold text-gray-100 group-hover:text-white transition-colors">Quality Assured</span>
              </div>
              <div className="flex flex-col items-start gap-3 group cursor-pointer">
                <div className="p-3 bg-blue-500/30 rounded-lg group-hover:bg-blue-500/50 transition-colors duration-300">
                  <Wrench size={20} className="text-blue-100" />
                </div>
                <span className="text-sm font-semibold text-gray-100 group-hover:text-white transition-colors">Expert Team</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-6 animate-fadeIn" style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
            <div className="bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-cyan-600/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-300/40 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative space-y-6">
                <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur group-hover:bg-white/20 transition-all duration-300">
                  <Zap size={40} className="text-yellow-300 animate-pulse-slow" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white mb-3">Professional Grade</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-gray-100">Procurement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                      <span className="text-gray-100">Installation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-gray-100">Repair & Maintenance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                      <span className="text-gray-100">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border border-green-300/30 hover:border-green-300/60 transition-colors duration-300 transform hover:scale-105 hover:-translate-y-1">
                <div className="inline-block p-2 bg-green-500/30 rounded-lg mb-3">
                  <Lightbulb size={20} className="text-green-200" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">500+</p>
                <p className="text-sm text-gray-200">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-300/30 hover:border-purple-300/60 transition-colors duration-300 transform hover:scale-105 hover:-translate-y-1">
                <div className="inline-block p-2 bg-purple-500/30 rounded-lg mb-3">
                  <Cog size={20} className="text-purple-200" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">10+</p>
                <p className="text-sm text-gray-200">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
