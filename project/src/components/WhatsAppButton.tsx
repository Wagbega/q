import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '2348142946722';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20ProServices`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="transition-transform group-hover:scale-110" />
      <span className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
