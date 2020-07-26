import React from "react";
import RecipeCard from "./recipeCard";
import './styles.css'


// This component renders a container for the recipe cards that are returned when the user enters a search term. It accepts an array
// of recipe objects as its props, and it uses that array to render recipe card components. When this component rerenders, the useEffect
// hook adds event listeners to the cards so that they can be opened and closed on click.

const CardContainer = (props) => {

  if (props.recipes) {
    return (
        <div className="card-container">
          {props.recipes.map((recipe) => {
            return (

            <RecipeCard recipe={recipe} isLoggedIn={props.isLoggedIn}></RecipeCard>

          );
          })}
        </div>
      
    );
  } else if (!props.recipes && props.searched){
    return (
      <h3 id="no-results-message">Sorry! We couldn't find anything.</h3>
    )
  } else { return null }
};

export default CardContainer;
