import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Layout } from "components/Layout";
import { Header } from "components/Header";
import { ChatList } from "components/ChatList";
import { MessageField } from "components/MessageField";
import { MobileProfilePage } from "components/Profile/MobileProfilePage";

configure({ adapter: new Adapter() });

let
  chats,
  messages,
  profileName,
  content,
  initialMobileState,
  showChatsState,
  showProfileState,
  onClickBodyState;

beforeEach(() => {
  chats = [
    {
      "id": 1,
      "name": "ChatsName1",
      "unread": false,
      "marked": false,
      "avatarSrc": ""
    },
    {
      "id": 2,
      "name": "ChatsName2",
      "messages": [],
      "unread": false,
      "marked": false,
      "avatarSrc": ""
    }
  ];

  messages = [
    {
      author: 'User1',
      content: 'Message1 from user1'
    },
    {
      author: 'User2',
      content: 'Message2 from user2'
    }
  ];

  profileName = "New name";

  content = {
    description: 'Test description'
  };

  initialMobileState = {
    showChats: false,
    showProfile: false,
    isMobile: true,
    onClickBody: false
  };

  showChatsState = {
    showChats: true,
    showProfile: false,
    isMobile: true,
    onClickBody: false
  };

  showProfileState = {
    showChats: false,
    showProfile: true,
    isMobile: true,
    onClickBody: false
  };

  onClickBodyState = {
    showChats: false,
    showProfile: false,
    isMobile: true,
    onClickBody: true
  };
  // const jsdom = require("jsdom");
  // const { JSDOM } = jsdom;
  // const dom = new JSDOM('<!DOCTYPE html><body></body>');
  // Object.defineProperty(dom.window.HTMLHtmlElement.prototype, 'clientWidth', { value: 500 });
});

describe("Layout component", () => {
  it("should rendered self and children", () => {
    const component = shallow(
      <Layout
        chats = { chats }
        messages = { messages }
        profileName = { profileName }
        content = { content }
      />
    );
    expect(component.find('.layout')).toHaveLength(1);
    expect(component.find(Header).props().name).toBe('New name');
    expect(component.find(ChatList).props().chats[1].id).toEqual(2);
    expect(component.find(MessageField).props().messages[0].content).toBe('Message1 from user1');
    expect(component.find(MobileProfilePage).props().content.description).toBe('Test description');
  });

  it("loading error rendering", () => {
    const component = shallow(
      <Layout isError = { true } />
    );
    expect(component.text()).toBe('Try reloading the page. Server is not available...');
  });

  it("loading rendering", () => {
    const component = shallow(
      <Layout isLoading = { true } />
    );
    expect(component.text()).toBe('Loading...');
  });

  it("should call componentDidMount once", () => {
    const componentDidMountSpy = jest.spyOn(
      Layout.prototype, "componentDidMount"
    );
    const component = shallow(<Layout />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    expect(component.state().isMobile).toBeTruthy();
  });

  it("should show and hide mobile components", () => {
    const component = shallow(<Layout />);
    expect(component.state()).toEqual(initialMobileState);

    component.instance().showFunc({ chats: true });
    expect(component.state()).toEqual(showChatsState);

    component.instance().showFunc({ profile: true });
    expect(component.state()).toEqual(showProfileState);

    component.instance().showFunc({ profile: false });
    expect(component.state()).toEqual(initialMobileState);

    component.instance().showFunc({ chats: true });
    expect(component.state()).toEqual(showChatsState);

    component
      .find(".body")
      .simulate("click", { target: { closest: () => ('.message-field') }});
    expect(component.state()).toEqual(onClickBodyState);
  });
});
