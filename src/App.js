import React, { Component, useState } from "react";
import SearchBar from "./searchComponent";
import SearchSummary from "./searchSummary";
// import "./materialize.css";

import CardContainer from "./cardContainer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  let APP_ID = "75c55f11";
  let APP_KEY = "85c90ba0da33bd59f927417d3d72febe";

  const getRecipes = (input, options) => {
    console.log(options, input);
    let req = `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;

    // The following conditionals add the user's diet type selections to the request string
    if (options.lowCarb) {
      req += `&diet=low-carb`;
    }
    if (options.lowFat) {
      req += `&diet=low-fat`;
    }

    if (options.balanced) {
      req += `&diet=balanced`;
    }

    if (options.highProtein) {
      req += `&diet=high-protein`;
    }

    if (options.highFiber) {
      req += `&diet=high-fiber`;
    }

    if (options.lowSodium) {
      req += `&diet=low-sodium`;
    }

    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(data.hits);
      });

    console.log(req);

    setQuery();
  };

  const renderSearchSummary = () => {
    if (query) {
      return <SearchSummary queries={null}></SearchSummary>;
    } else return null;
  };

  return (
    <React.Fragment>
      <div className="app-container">
        <SearchBar onClick={getRecipes}></SearchBar>
        {renderSearchSummary()}
        <CardContainer recipes={recipes}></CardContainer>
      </div>
    </React.Fragment>
  );
};

export default App;
