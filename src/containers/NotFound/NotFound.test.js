import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import NotFound from "./NotFound";

describe("ErrorBoundary", function() {
  it("should be rendered without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should be rendered correctly", () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
