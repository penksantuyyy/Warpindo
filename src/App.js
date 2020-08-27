import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ExamplePage from "pages/ExamplePage";

function App() {
  return (
    <div className="App font-body text-gray-800">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/example" component={ExamplePage} />
      </Router>
    </div>
  );
}

export default App;
