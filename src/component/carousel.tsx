import React from "react";
import Recipe from "./recipe";

function Carousel() {
  const recipeinfo = [
    {
      nameone: "ojingeo",
      nametwo: "muchim",
      food: "Image",
      values: "5.0",
      star: "icon",
      heart: "iconheart",
    },
    {
      nameone: "ojingeo",
      nametwo: "muchim",
      food: "Image",
      values: "5.0",
      star: "icon",
      heart: "iconheart",
    },
    {
      nameone: "ojingeo",
      nametwo: "muchim",
      food: "Image",
      values: "5.0",
      star: "icon",
      heart: "iconheart",
    },
    {
      nameone: "ojingeo",
      nametwo: "muchim",
      food: "Image",
      values: "5.0",
      star: "icon",
      heart: "iconheart",
    },
  ];

  return (
    <div>
      <p className="carrousel_tittle">Nuevas Recetas</p>
      <div className="carrousel_container">
        {recipeinfo.map((number) => {
          return (
            <Recipe
              nameone={number.nameone}
              nametwo={number.nametwo}
              rate={number.values}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
