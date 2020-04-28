import React from "react";
//going to have to loop through the options object and map each search option to its on <p> element
const SearchSummary = (props) => {
  const renderP = () => {
    if (props.query) {
      return (
        <p className="search-summary-p">
          Showing results for <b>{props.query}</b>
        </p>
      );
    } else return null;
  };

  return renderP();
};

export default SearchSummary;
