import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { MessageForm } from "components/MessageForm";

configure({ adapter: new Adapter() });

let initialState, successState, failureState;
beforeEach(() => {
  initialState = {
    formData: {
      author: { value: "Human", error: false },
      content: { value: "", error: false },
    },
  };

  successState = {
    formData: {
      author: { value: "Human", error: false },
      content: { value: "Human message", error: false },
    },
  };

  failureState = {
    formData: {
      author: { value: "Human", error: false },
      content: { value: "", error: true },
    },
  };
});

describe("MessageForm component function testing", () => {

  it("should send message", () => {
    const component = shallow(<MessageForm />);
    expect(component.state()).toEqual(initialState);

    component
      .find(".message-form__content")
      .simulate("change", { target: { name: "content", value: "Human message" } });
    expect(component.state()).toEqual(successState);

    component.find("WithStyles(ForwardRef(Fab))").simulate("click");
    expect(component.state()).toEqual(initialState);
  });

  it("should fail send message", () => {
    const component = shallow(<MessageForm />);
    expect(component.state()).toEqual(initialState);

    component.find("WithStyles(ForwardRef(Fab))").simulate("click");
    expect(component.state()).toEqual(failureState);
  });

  it("should send message if Ctrl + Enter", () => {
    const component = shallow(<MessageForm />);
    expect(component.state()).toEqual(initialState);

    component
      .find(".message-form__content")
      .simulate("change", { target: { name: "content", value: "Human message" } });
    expect(component.state()).toEqual(successState);

    component
      .find(".message-form__content")
      .simulate("keydown", { ctrlKey: true, keyCode: 13 } );
    expect(component.state()).toEqual(initialState);
  });

//   it("should failed propTypes", () => {
//     const onSend = null;
//     const component = shallow(<MessageForm onSend={onSend} />);
//     expect(component.state()).toEqual(initialState);

//     component
//       .find(".message-form__content")
//       .simulate("change", { target: { name: "content", value: "Human message" } });
//     expect(component.state()).toEqual(successState);
    
//     component.find("WithStyles(ForwardRef(Fab))").simulate("click");
//     expect(component.state()).toEqual(successState);
//   });
});
