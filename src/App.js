import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import ExamplePage from "pages/ExamplePage";

function App() {
  return (
    <div className="App font-body text-gray-800 tracking-wide">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/example" component={ExamplePage} />
      </Router>
    </div>
  );
}

export default App;
