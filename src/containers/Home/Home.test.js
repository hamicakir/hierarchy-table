import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Home from "./Home";

describe("ErrorBoundary", function() {
  it("should be rendered without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should be rendered correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
