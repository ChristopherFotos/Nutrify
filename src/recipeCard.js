import React from "react";

// This component renders the card elements. 
//
// Time to add save functionality to this component. First we're going to write
// a function that sends a fetch request to the save route. The body of that 
// request will contain whatever fields the recipe model is currently set up 
// to handle. The fields will be populated with info from this component's prop. 
// Obviously, the user is going to have to be logged in in order to use the save
// functionality. We can ensure that they're logged in by hitting the verify 
// at the beginning of the function, and then only hitting the save route if
// the verify route returns positive. If it returns negative, we can display a
// modal that says 'please log in.' Alternatively, we could render the button only
// for logged in users. 
// 
// The function will be made to run when a floating action button inside the card 
// is clicked. 



const RecipeCard = (props) => {

  async function saveFunction() {
    // Create an object to form the body of our POST request
    let body = {
      ingredientLines: props.recipe.recipe.ingredientLines,
      img: props.recipe.recipe.image,
      label: props.recipe.recipe.label
    }

    console.log(body)
    let bodyString = JSON.stringify(body)

    // Make the fetch request 
    const res = await fetch('http://localhost:3000/user/save', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: bodyString
    })

    let resJSON = await res.json()
    console.log(resJSON)
  }


  return (
    <div className="grid-card">

      <img
        src={props.recipe.recipe.image}
        className="card-img"
        alt="the finished product"
      />
      <span className="recipe-title">{props.recipe.recipe.label}</span>
      <span className="save-button" onClick={saveFunction}>Save</span>
      <div className="card-content">
        <span className="show-details show-details-open ingredient-card-tag">
          Show
        </span>

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
        <span className="show-details show-details-open nutrition-card-tag">
          Show
        </span>

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
