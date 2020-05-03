import React from "react";
import { initStore } from "../../store";
import { Provider } from "react-redux";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ProfileContainer } from "containers/ProfileContainer";
import { ProfilePage } from "components/Profile";

configure({ adapter: new Adapter() });

let name, content;
beforeEach(() => {
  name = "Morpheus";
  content = { description: "Сaptain of the Nebuchadnezzar" };
});

describe("ProfileContainer component", () => {

  it("loading rendering", () => {
    const handleFormSpy = jest.fn();
    const linkToSpy = jest.fn();

    const { store } = initStore();
    const component = mount(
      <Provider store={store}>
          <ProfileContainer
            name={name}
            content={content}
            isLoading={false}
            isError={false}
            handleForm={handleFormSpy}
            linkTo={linkToSpy}
          />
      </Provider>
    );
    expect(component.find(ProfilePage)).toHaveLength(1);
    expect(component.props().children.props.name).toBe(name);
    expect(component.props().children.props.content.description).toBe(content.description);
  });
});
