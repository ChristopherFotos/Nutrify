const getRecipes = (ingr, appID, appKey, calFrom, calTo, maxResults) => {
  fetch(
    `https://api.edamam.com/search?q=${ingr}&app_id=${appID}&app_key=${appKey}&calories=${calFrom}-${calTo}&from=0&to=${maxResults}`
  )
    .then((res) => res.json())
    .then((data) => {
      setRecipes(data.hits);
      console.log(data.hits);
    });

  setQuery();
};
