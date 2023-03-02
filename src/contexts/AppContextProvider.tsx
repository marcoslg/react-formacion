import { Context, NullableContext, Settings, User } from "models";
import React, { useState, createContext, useReducer } from "react";

export const AppContext = createContext<NullableContext<Context>>({});
const AppContextProvider = ({ children }: any) => {
  const [settings, setSettings] = useState<Settings>({ darkmode: false });
  const [activeUser, setActiveUser] = useState<User | null>(null);

  const toggleDarkMode = () => {
    setSettings &&
      setSettings((prev) => ({ ...prev, darkmode: !prev.darkmode }));
  };
  return (
    <AppContext.Provider
      value={{ settings, setSettings, toggleDarkMode }}
      children={children}
    />
  );
};

export default AppContextProvider;
