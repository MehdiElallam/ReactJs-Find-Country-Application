import React from "react";
import { Link } from "react-router-dom";

class header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>{this.props.title}</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/Mehdi/23">Page 1</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/page2",
                state: {
                  from: "root"
                }
              }}
            >
              Page 2
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default header;
