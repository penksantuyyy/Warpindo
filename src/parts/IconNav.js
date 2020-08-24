import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "elements/Button";

import BrandLogo from "assets/images/logo/logo-warpindo-small.svg";

export default function IconNav() {
  return (
    <Router>
      <Button className="brand-logo-icon" href="" type="link">
        <img src={BrandLogo} alt="logo-warpindo" />
      </Button>
    </Router>
  );
}
