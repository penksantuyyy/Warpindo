import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App font-body text-gray-800">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
