"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ToggleContextType {
  isToggled: boolean;
  toggle: () => void;
  setIsToggled: (value: boolean) => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// Create the provider component's props interface
interface ToggleProviderProps {
  children: ReactNode;
}

// Create the provider component
export const ToggleProvider = ({ children }: ToggleProviderProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggle, setIsToggled }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Custom hook to use the toggle context
export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
