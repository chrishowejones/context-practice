import React from "react";
import { ItemContext, PriceContext } from "../App";

export default function ComponentZ() {
  return (
    <div>
      <PriceContext.Consumer>
        {(price) => {
          return (
            <ItemContext.Consumer>
              {(item) => {
                return (
                  <div>
                    Price context: {price} - item context: {item}
                  </div>
                );
              }}
            </ItemContext.Consumer>
          );
        }}
      </PriceContext.Consumer>
    </div>
  );
}
