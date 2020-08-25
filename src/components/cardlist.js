import React from "react";
import "../styles/cardlist.css";
import { CardItem } from "./cardItem";

export const CardList = props => {
  return (
    <div className="grid-container">
      {props.rest.map(item => {
        return (
          <>
            <CardItem
              key={item.Brand}
              name={item.Brand}
              variety={item.Variety}
              stars={item.Stars}
              country={item.Country}
              mode={item.Style}
              top={item["Top Ten"]}
              image={item.image}
            />
          </>
        );
      })}
    </div>
  );
};
