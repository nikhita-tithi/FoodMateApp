import React from "react";
import "../styles/landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-billboard text-center">
        <div className="img"></div>
        <div className="container pt">
          <div className="text-center">
            <img
              alt="LOGO"
              className="logo"
              src="https://vectr.com/tmp/a2aUS0TzKq/a1aZ3HJGdu.svg?width=238.69&height=228.57&select=f3FvHR52gm,byhSpUX2d&source=selection"
            />
          </div>
          <div className="mt-5 text-color">
            <h2>Find the best Restaurants</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
