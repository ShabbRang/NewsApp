import React from "react";
import ReactDOM from "react-dom/client";
import { EmailProvider } from "./components/EmailContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmailProvider>
      <App />
    </EmailProvider>
  </React.StrictMode>
);
