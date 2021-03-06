import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", function() {
  it("should be rendered without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ErrorBoundary>
        <div />
      </ErrorBoundary>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should be rendered correctly", () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <div />
        </ErrorBoundary>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
