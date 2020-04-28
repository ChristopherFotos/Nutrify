import React, { useEffect } from "react";
import RecipeCard from "./recipeCard";

const CardContainer = (props) => {
  useEffect(() => {
    console.log("RECIPES************ ", props.recipes);

    let targets = document.querySelectorAll(".show-details");

    targets.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (!e.target.expanded) {
          e.target.expanded = true;
          e.target.innerText = "Hide details";
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
          e.target.expanded = false;
          e.target.innerText = "Show details";
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

  return (
    <div className="card-container">
      {props.recipes.map((recipe) => {
        return <RecipeCard recipe={recipe}></RecipeCard>;
      })}
    </div>
  );
};

export default CardContainer;
