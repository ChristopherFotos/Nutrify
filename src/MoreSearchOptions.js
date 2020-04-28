import React, { useState } from "react";

const MoreSearchOptions = (props) => {
  return (
    <React.Fragment>
      <div className="search-options-label" onClick={props.onClick}>
        More search options
      </div>
    </React.Fragment>
  );
};

export default MoreSearchOptions;
