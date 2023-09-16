import React from "react";
import "./App.css";
import Header from "./components/headers/Header";
import TinderCards from "./components/cards/TinderCards";
import SwipeButtons from "./components/buttons/SwipeButtons";

function App() {
  return (
    // BEM class naming convention.
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
