import { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
      )
      .then((response) => {
        // console.log(response.data.meals);
        setItems(response.data.meals);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const itemsList = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p className="dosa">{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemsList}</div>;
};
export default Meals;
