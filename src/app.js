import React from "react";
import AppRouter from "./routers/AppRouter";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css"; // normalize CSS so all browsers are build from the same CSS base
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
