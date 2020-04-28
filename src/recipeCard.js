import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="grid-card">
      <img
        src={props.recipe.recipe.image}
        className="card-img"
        alt="the finished product"
      />
      <span className="recipe-title">{props.recipe.recipe.label}</span>
      <div className="card-content">
        <span className="show-details show-details-open">Show details</span>
        <div className="card-content-closed">
          <ul style={{ display: "none" }}>
            {props.recipe.recipe.ingredientLines.map((ingredientLine) => {
              return <li>{ingredientLine}</li>;
            })}
          </ul>
          <h4 style={{ display: "none" }}>A lovely heading</h4>
          <p style={{ display: "none" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="card-content">
        <span className="show-details show-details-open">Show details</span>
        <div className="card-content-closed">
          <ul style={{ display: "none" }}>
            {props.recipe.recipe.ingredientLines.map((ingredientLine) => {
              return <li>{ingredientLine}</li>;
            })}
          </ul>
          <h4 style={{ display: "none" }}>A lovely heading</h4>
          <p style={{ display: "none" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="recipe-summary-div">
          6 ingredients | Low carb | Low fat | Martha Stewart
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
