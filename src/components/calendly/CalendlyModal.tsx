import React from 'react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Calendly Container */}
      <div className="relative z-50 w-full max-w-4xl h-[85vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-200 transition-colors"
          aria-label="Close calendar"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Calendly Embed */}
        <iframe
          src="https://calendly.com/ju-jomena/30min?embed_domain=jomena.group&embed_type=inline&hide_gdpr_banner=1"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
};
