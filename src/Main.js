import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

function Main() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={App} />
        </Router>
    );
}

export default Main;