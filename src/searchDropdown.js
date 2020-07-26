import React, { Component } from "react";

/*==================================================================================================
  This componentrenders the search options dropdown. It uses CSS transitions to collapse and expand. 
  It is rendered by SearchBar and takes that component's updateOptions funciton as a prop. This 
  component holds several checkboxes that correspond with the diet labels offered by the edamam 
  API. When one of the checkboxes is clicked, the props.updateOptions function  is called.
  ================================================================================================*/

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calFrom: null, calTo: null }
    this.calTo = null
    this.options = {
      red: false,
      blue: false,
    };
  }

  render() {
    return (
      <div id="search-options-expand" class="search-dropdown-closed">


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
          {/* CALORIES */}
          <p className="search-option-heading-closed">nutrient options:</p>
          <input
            className="validate"
            placeholder="min calories"
            name="cal-from"
            type="number"
            onChange={(e) => { this.props.updateOptions(e) }
            }
            value={this.calFrom}
            id="option-input-1"
          />
          <input
            placeholder="max calories"
            name="cal-to"
            type="number"
            value={this.calTo}
            onChange={(e) => {
              if (!isNaN(e.target.value)) { this.props.updateOptions(e) }
            }}
            className="validate"
            id="option-input-2"
          />
        </p>
      </div>
    );
  }
}

export default SearchDropdown;
