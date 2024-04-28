import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ComponentC from "./components/ComponentC";

export const PriceContext = React.createContext();
export const ItemContext = React.createContext();

function App() {
  return (
    <div className="App">
      <PriceContext.Provider value={"$200"}>
        <ItemContext.Provider value={"samsung"}>
          <ComponentC />
        </ItemContext.Provider>
      </PriceContext.Provider>
    </div>
  );
}

export default App;
