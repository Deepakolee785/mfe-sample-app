import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { StoreProvider } from "API/store";
import "./index.css";

ReactDOM.render(
  <ErrorBoundary>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
