/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import React, { useState, createContext } from "react";
import { NullableContext, Settings, User } from "models";
import "./App.scss";
import Home from "views/Home";
import SettingsView from "views/SettingsView";
import AppContextProvider from "contexts/AppContextProvider";
import { ContadorContext } from "contexts/ContadorContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Home />
      <SettingsView />
      {/* <ContadorContextProvider></ContadorContextProvider> */}
    </AppContextProvider>
  );

  //   return (
  //     <>
  //       <AppContext.Provider value={{ settings, setSettings }}>
  //         <Home />
  //         <SettingsView />
  //       </AppContext.Provider>
  //     </>
  //   );
  // }
}

export default App;
