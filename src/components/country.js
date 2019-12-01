import React from "react";
import { Link } from "react-router-dom";

class Country extends React.Component {
  render() {
    return (
      <div className="countrie">
        <Link to={`/detail/${this.props.country.name}`}>
          <p>{this.props.country.name}</p>
        </Link>
      </div>
    );
  }
}

export default Country;
