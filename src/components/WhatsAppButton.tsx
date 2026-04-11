import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello MindSpring, I would like to know more about your services.", 
  className = "", 
  children 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (children) {
    return (
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <button 
      onClick={handleClick}
      className={`px-6 py-3 bg-[#25D366] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors shadow-lg ${className}`}
    >
      <MessageCircle size={20} />
      Message on WhatsApp
    </button>
  );
}
