import { useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    details: string;
    benefits: string[];
    process: string[];
  } | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl animate-scaleIn flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 border-b border-gray-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 dark:from-slate-700 to-indigo-50 dark:to-slate-700 z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white pr-4 leading-tight">{service.title}</h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-white/70 dark:hover:bg-slate-600/70 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Close modal"
          >
            <X size={24} className="sm:w-7 sm:h-7" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 custom-scrollbar">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8 md:space-y-10">
            <div className="animate-slideUp">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Overview</h3>
              </div>
              <div className="bg-gradient-to-br from-gray-50 dark:from-slate-700 to-blue-50 dark:to-slate-700 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">{service.details}</p>
              </div>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-full" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">What We Offer</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white dark:bg-slate-700 p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-600 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200 group">
                    <CheckCircle size={18} className="text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Process</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4 items-start bg-gradient-to-r from-orange-50 dark:from-slate-700 to-amber-50 dark:to-slate-700 p-3 sm:p-4 md:p-5 rounded-lg border border-orange-200 dark:border-slate-600 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-200 hover:shadow-md">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-sm sm:text-base flex-shrink-0 shadow-md">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1 sm:pt-2 text-sm sm:text-base">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-400 rounded-full" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Key Benefits</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 dark:from-slate-700 to-cyan-50 dark:to-slate-700 p-4 sm:p-5 rounded-xl border border-blue-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                    <p className="text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base leading-snug">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200 dark:border-slate-700 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={onClose}
                className="w-full sm:flex-1 bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white py-3 sm:py-3.5 px-6 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-200 hover:shadow-md text-sm sm:text-base"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-3.5 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-sm sm:text-base"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
