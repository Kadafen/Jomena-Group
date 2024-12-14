import React, { createContext, useContext, useState } from 'react';
import { CalendlyModal } from '@/components/calendly/CalendlyModal';

interface CalendlyContextType {
  openCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCalendly = () => {
    setIsModalOpen(true);
  };

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}
      <CalendlyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
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
