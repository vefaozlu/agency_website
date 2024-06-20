import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Modal from "react-modal";
import App from "./App";

Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
