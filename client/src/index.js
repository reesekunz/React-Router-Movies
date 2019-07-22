import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

// Step 1a - import your BrowserRouter as Router inside your `index.js` file.
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  // Step 1b - wrap your app with the router - we can now use react router inside our application
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
