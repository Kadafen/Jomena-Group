import React, { createContext, useContext, useEffect } from 'react';

interface CalendlyContextType {
  openCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ju-jomena/30min',
        text: 'Schedule time with me',
        color: '#00a2ff',
        textColor: '#ffffff',
        branding: true
      });
    }
  };

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (context === undefined) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
};

// Add TypeScript declaration for Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}
