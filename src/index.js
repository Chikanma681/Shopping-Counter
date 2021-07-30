import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
// you only use counter() in that way when the function is anonymous like function()
// methods in JS classes dont have function in front of em
ReactDOM.render(<App />, document.getElementById("root"));
