import { useState } from "react";
import "../style.css";

const ColorToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const backgroundColor = isDarkMode ? "black" : "white";
  const textColor = isDarkMode ? "white" : "black";

  const handleClick = () => setIsDarkMode(!isDarkMode);

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        style={{
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
        onClick={handleClick}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>

      <section className="content">
        <h1>
          Welcome To A <br /> Real World...
        </h1>
      </section>
    </div>
  );
};
export default ColorToggler;
