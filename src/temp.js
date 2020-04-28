import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="card recipe-card">
      <div className="card-image recipe-img">
        <img src={props.recipe.recipe.image} alt="the recipe" className></img>
      </div>
      <div>
        <span className="card-title recipe-name">
          {props.recipe.recipe.label}
        </span>
        <ul className="recipe-details">
          {props.recipe.recipe.ingredientLines.map((ingredientLine) => {
            return <li>{ingredientLine}</li>;
          })}
        </ul>
      </div>
      <div className="card-action">
        <a className="card-link" href="#">
          This is a link
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
