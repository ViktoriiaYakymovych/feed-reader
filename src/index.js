import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
