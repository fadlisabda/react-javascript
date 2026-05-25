// * usecontext
import { createContext, useState } from "react";

// * membuat wadah data
const DarkModeContext = createContext();

// * provider menyediakan data
const DarkModeContextProvider = ({ children }) => {
  // *value berubah use context berubah
  const [isDarkMode, setIsDarkMode] = useState(true);

  return <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
