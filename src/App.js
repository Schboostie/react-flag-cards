import React, { useEffect, useState } from "react";
import FlagDisplay from "./FlagDisplay";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Flag Display</h1>
      <FlagDisplay />
    </div>
  );
};

export default App;
