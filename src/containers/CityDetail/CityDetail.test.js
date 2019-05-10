import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';

import CityDetail from "./CityDetail";

describe("City Detail", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CityDetail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<CityDetail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
