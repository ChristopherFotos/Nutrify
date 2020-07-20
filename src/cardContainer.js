import React, { useEffect, useState } from "react";
import RecipeCard from "./recipeCard";

// This component renders a container for the recipe cards that are returned when the user enters a search term. It accepts an array
// of recipe objects as its props, and it uses that array to render recipe card components. When this component rerenders, the useEffect
// hook adds event listeners to the cards so that they can be opened and closed on click.

const CardContainer = (props) => {
  
  let searched = false

  useEffect(() => {
    let targets = document.querySelectorAll(".show-details");
    targets.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        console.log("RUNNINNGGG")
        if (!e.target.expanded) {
          //Checks if the div is collpased and opens it
          e.target.expanded = true;
          e.target.innerText = "Hide";
          Array.from(e.target.parentElement.children[1].children).forEach(
            (li) => {
              li.style.display = "block";
            }
          );
          e.target.parentElement.children[1].classList.remove(
            "card-content-closed"
          );
          e.target.parentElement.children[1].classList.add("card-content-open");
          e.target.parentElement.classList.remove("card-closed");
          e.target.parentElement.classList.add("card-open");
        } else if (e.target.expanded) {
          //Checks if the div is open and collapses it
          e.target.expanded = false;
          e.target.innerText = "Show";
          Array.from(e.target.parentElement.children[1].children).forEach(
            (li) => {
              li.style.display = "none";
            }
          );
          e.target.parentElement.children[1].classList.remove(
            "card-content-open"
          );
          e.target.parentElement.children[1].classList.add(
            "card-content-closed"
          );
          e.target.parentElement.children[1].classList.remove("card-open");
          e.target.parentElement.classList.remove("card-open");
          e.target.parentElement.classList.add("card-closed");
        }
      });
    });
  });
  

  if (props.recipes.length > 0) {
    return (
      <div className="card-container">
        {props.recipes.map((recipe) => {
          return <RecipeCard recipe={recipe}></RecipeCard>;
        })}
      </div>
    );
  } else if (props.recipes.length < 1 && props.searched){
    return (
      <h3 id="no-results-message">Sorry! We couldn't find anything.</h3>
    )
  } else { return null }
};

export default CardContainer;
