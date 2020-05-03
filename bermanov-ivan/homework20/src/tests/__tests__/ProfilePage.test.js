import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import {
  act,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass,
} from "react-dom/test-utils";
import pretty from "pretty";

import { ProfilePage } from "components/Profile";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("ProfilePage component", () => {
  it("rendering with props", () => {
    const name = "messenger prototype";
    const content = {
      description: "verification test\n",
      intern: "Andrew Martin\n",
      teacher: "Dennis Mansky\n",
      course: "Robot for people\n",
      school: "NorthAm Robotics\n",
    };
    act(() => {
      render(<ProfilePage name = { name } content = { content } />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });

  it("rendering with default props", () => {
    act(() => {
      render(<ProfilePage />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });

  it("loading error rendering", () => {
    act(() => {
      render(<ProfilePage isError = { true } />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });

  it("loading rendering", () => {
    act(() => {
      render(<ProfilePage isLoading = { true } />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });

  it("has two h3 tags", () => {
    const component = renderIntoDocument(<ProfilePage />);
    const h3 = scryRenderedDOMComponentsWithTag(component, "h3");
    expect(h3).toHaveLength(2);
  });

  it("has a profile-body_edit class", () => {
    const component = renderIntoDocument(<ProfilePage />);
    const profileBodyEdit = scryRenderedDOMComponentsWithClass(component, "profile-body_edit");
    expect(profileBodyEdit).toBeTruthy();
  });
});
