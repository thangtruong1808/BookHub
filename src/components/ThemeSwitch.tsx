import { useState, useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
  const { darkMode, setDarkMode } = useThemeContext();

  const switchTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    darkMode
      ? document.documentElement.setAttribute("darkMode", "")
      : document.documentElement.removeAttribute("darkMode", "");
  }, [darkMode]);

  return (
    <>
      <div className="form-check form-switch mx-2 position-absolute bottom-0 start-0 mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={darkMode}
          onChange={switchTheme}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Switch Theme
        </label>
      </div>
    </>
    // <div id="theme-switch" className="me-5">
    //   <div className="switch-track">
    //     <div className="switch-check">
    //       <span className="switch-icon">🌙</span>
    //     </div>
    //     <div className="switch-x">
    //       <span className="switch-icon">🌞</span>
    //     </div>
    //     <div className="switch-thumb"></div>
    //   </div>
    //   <input
    //     type="checkbox"
    //     checked={darkMode}
    //     onChange={switchTheme}
    //     aria-label="Switch between dark and light mode"
    //   />
    // </div>
  );
};

export default ThemeSwitch;
