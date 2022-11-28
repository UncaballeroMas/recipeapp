import React from "react";
import foodone from "../assets/Ojingeo-muchim.png";

interface recipeprops {
  nameone: string;
  nametwo: string;
  rate: string;
}

const Recipe = ({ nameone, nametwo, rate }: recipeprops) => {
  return (
    <div>
      <div className="recipe_container">
        <div className="recipe_containerfood">
          <img src={foodone} alt="" className="recipe_food " />
          <div className="recipe_containertext">
            <p className="recipe_textfood">{nameone} </p>
            <p className="recipe_textsubfood">{nametwo}</p>
          </div>
          <div className="recipe_containericon">
            <div className="recipe_star">
              <p className="recipe_values">{rate}</p>
            </div>
            <div className="recipe_heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
