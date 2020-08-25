import React from "react";
import "../styles/card.css";

export const CardItem = props => {
  const { name, variety, stars, country, mode, top, image } = props;

  const starArray = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  return (
    <div className="restaurant-card">
      <div
        style={{
          backgroundImage: `url( ${image} )`,
          backgroundSize: "cover",
          position: "relative",
          height: "50%",
          backgroundPositionX: "center",
          backgroundPositionY: "center"
        }}
      ></div>
      <div className="card-body">
        <h1>{name}</h1>
        <p>Variety : {variety}</p>
        <p>{country}</p>
        <p>{starArray[Math.floor(stars - 1)]}</p>
        <p style={{ position: "absolute", left: "4px", top: "0px" }}>
          {mode == "NaN" || mode == "Nan" ? (
            <span></span>
          ) : (
            <span>Style : {mode}</span>
          )}
        </p>
        <p style={{ position: "absolute", right: "8px", top: "0px" }}>
          {top == "NaN" ? (
            <span></span>
          ) : (
            <span>
              {top.substring(top.length - 3)} in {top.substring(0, 4)}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
