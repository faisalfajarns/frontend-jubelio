import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RootStateProvider } from "./context/RootStateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RootStateProvider>
        <App />
    </RootStateProvider>
);
