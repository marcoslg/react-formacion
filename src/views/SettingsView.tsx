import { AppContext } from "contexts/AppContextProvider";
import React, { useContext } from "react";

const SettingsView = () => {
  const { settings, toggleDarkMode } = useContext(AppContext);

  return (
    <div className={`settings ${settings?.darkmode ? "dark" : ""}`}>
      <h1>SettingsView</h1>
      <label htmlFor="darkmode">Dark mode</label>
      <input
        type="checkbox"
        id="darkmode"
        checked={settings?.darkmode}
        onChange={toggleDarkMode}
      />
    </div>
  );
};

export default SettingsView;
