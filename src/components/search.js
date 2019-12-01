import React from "react";
import Country from "./country";
import json from "../countries.json";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      countries: json
    };
    this.loadCountries = this.loadCountries.bind(this);
  }

  loadCountries(event) {
    this.setState({
      search: event.target.value.substr(0, 5)
    });
  }
  render() {
    let countries = this.state.countries.filter(country => {
      return (
        country.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            onChange={this.loadCountries}
            placeholder="Tap a country"
          />
          <div className="countries-list" id="countries-list">
            {countries.map(country => {
              return <Country key={country.code} country={country} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
