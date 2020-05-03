import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { mount, configure }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MobileProfilePage } from "components/Profile/MobileProfilePage";

configure({ adapter: new Adapter() });

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

describe("MobileProfilePage component", () => {
  it("props rendering", () => {
    const content = {
      description: "mobile version\n",
      intern: "Andrew Martin\n",
      teacher: "Dennis Mansky\n",
      course: "Robot for people\n",
      school: "NorthAm Robotics\n",
    };
    act(() => {
      render(<MobileProfilePage content={content} />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });

  it("default props rendering", () => {
    act(() => {
      render(<MobileProfilePage />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });

  it("loading error rendering", () => {
    act(() => {
      render(<MobileProfilePage isError = { true } />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });

  it("loading rendering", () => {
    act(() => {
      render(<MobileProfilePage isLoading = { true } />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
  });

  it("not has header component", () => {
    const component = mount(<MobileProfilePage />);
    const header = component.find('.header');
    expect(header).toHaveLength(0);
  });
});
