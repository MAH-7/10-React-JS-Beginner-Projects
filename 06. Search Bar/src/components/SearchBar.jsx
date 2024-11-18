import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../index.css";

const SearchBar = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("rgb(204, 52, 62)");

    if (e.target.className === "container") {
      setIsShowInput(false);
      setBgColor("white");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {isShowInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setIsShowInput(true)} />
      )}
    </section>
  );
};
export default SearchBar;
