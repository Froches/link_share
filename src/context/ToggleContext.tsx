import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface ToggleContextType {
  isToggled: boolean;
  toggle: () => void;
}

// Create the context with default values
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
    <ToggleContext.Provider value={{ isToggled, toggle }}>
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
