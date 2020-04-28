import React, { Component } from "react";
import anim from "./animations";

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      red: false,
      blue: false,
    };
  }

  //   componentDidMount() {
  //     let optionBox = document.getElementById("search-options-expand");
  //     optionBox.style.height = "0";
  //     let childArray = Array.from(optionBox.children);
  //     childArray.forEach((elem) => {
  //       elem.style.display = "none";
  //     });
  //   }

  render() {
    return (
      <div id="search-options-expand" class="search-dropdown-closed">
        <p className="search-option-heading-closed">diet options:</p>

        <label className="search-option-heading-closed">
          <input
            type="checkbox"
            onChange={this.props.updateOptions}
            name="low carb"
          />
          <span>Low carb</span>
        </label>

        <label className="search-option-heading-closed">
          <input
            type="checkbox"
            onChange={this.props.updateOptions}
            name="low fat"
          />
          <span>Low fat</span>
        </label>

        <label className="search-option-heading-closed">
          <input
            type="checkbox"
            onChange={this.props.updateOptions}
            name="balanced"
          />
          <span>Balanced</span>
        </label>

        <label className="search-option-heading-closed">
          <input
            type="checkbox"
            onChange={this.props.updateOptions}
            name="high protein"
          />
          <span>High protein</span>
        </label>

        <label className="search-option-heading-closed">
          <input
            type="checkbox"
            onChange={this.props.updateOptions}
            name="high fiber"
          />
          <span>High fiber</span>
        </label>

        <label className="search-option-heading-closed">
          <input
            type="checkbox"
            onChange={this.props.updateOptions}
            name="low sodium"
          />
          <span>Low sodium</span>
        </label>
        <p>
          <p className="search-option-heading-closed">nutrient options:</p>
          <input
            className="search-option-heading-closed"
            placeholder="min calories"
            name="cal-from"
            type="text"
            className="validate"
            id="option-input-1"
          />
          <input
            placeholder="max calories"
            name="cal-to"
            type="text"
            className="validate"
            id="option-input-2"
          />
        </p>
      </div>
    );
  }
}

export default SearchDropdown;
