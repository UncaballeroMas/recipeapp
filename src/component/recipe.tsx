import React from "react";
import foodone from "../assets/Ojingeo-muchim.png";

const Recipe = () => {
  return (
    <div>
      <p className="recipe_tittle">Nuevas Recetas</p>
      <div className="recipe_container">
        <div className="recipe_containerfood">
          <img src={foodone} alt="" className="recipe_food " />
          <div className="recipe_containertext">
            <p className="recipe_textfood">Ojingeo </p>
            <p className="recipe_textsubfood">Muchim</p>
          </div>
          <div className="recipe_containericon">
            <div className="recipe_star">
              <p className="recipe_values">5.0</p>
            </div>
            <div className="recipe_heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
