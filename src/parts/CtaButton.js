import React from "react";
import { BrowserRouter as Route } from "react-router-dom";

import Button from "elements/Button";

export default function CtaButton() {
  return (
    <div className="text-center">
      <Route>
        <Button
          className="btn btn-outline btn-outline-gray"
          type="link"
          href={`/properties/coffee`}
        >
          Shop Now
        </Button>
      </Route>
    </div>
  );
}
