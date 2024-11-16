import { useState } from "react";
import "../style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClickIncrement = () => setCount(count + 1);
  const handleClickDecrement = () => setCount(count - 1);
  return (
    <div className="container">
      <div className="number">
        <h1>{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={handleClickIncrement} className="operation">
          +
        </button>
        <button onClick={handleClickDecrement} className="operation">
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
