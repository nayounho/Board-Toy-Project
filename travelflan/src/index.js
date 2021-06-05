import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "utills/GlobalStyles";
import App from "./App/App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
