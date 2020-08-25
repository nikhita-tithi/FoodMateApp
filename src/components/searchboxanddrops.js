import React from "react";
import "../styles/search.css";

export const Search = props => {
  const handleYear = () => {
    let y = document.getElementById("wikitechYears").value;
    props.yearChange(y);
  };
  const handleCountry = () => {
    var x = document.getElementById("wikitechyColors").value;
    props.countryChange(x);
  };

  return (
    <div className="parent">
      <div>
        <input
          placeholder="Search By Brand Name"
          className="ibox"
          value={props.value}
          onChange={e => {
            props.inputChange(e);
          }}
          type="text"
        ></input>
      </div>
      <div>
        <select className="drop1" id="wikitechYears" onChange={handleYear}>
          <option value="">Select Year</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </div>
      <div>
        <select className="drop2" id="wikitechyColors" onChange={handleCountry}>
          <option value="">Select Country</option>
          <option value="Singapore">Singapore</option>
          <option value="Japan">Japan</option>
          <option value="Thailand">Thailand</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Taiwan">Taiwan</option>
          <option value="South Korea">South Korea</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Indonesia">Indonesia</option>
          <option value="USA">USA</option>
          <option value="Myanmar">Myanmar</option>
        </select>
      </div>
    </div>
  );
};
