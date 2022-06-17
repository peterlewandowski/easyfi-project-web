import React from "react";
import CreateStrategy from "../CreateStrategy";
export default function Main({userInput, setUserInput}) {
  return (
    <div id="main" style={{ backgroundColor: "#F0FBF0" }}>
      <CreateStrategy />
    </div>
  );
}
