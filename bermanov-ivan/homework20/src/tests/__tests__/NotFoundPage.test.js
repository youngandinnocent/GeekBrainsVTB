import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import { NotFoundPage } from "pages/NotFoundPage";

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

describe("NotFoundPage component", () => {
  it("should rendered", () => {
    act(() => {
      render(<NotFoundPage />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });
});
