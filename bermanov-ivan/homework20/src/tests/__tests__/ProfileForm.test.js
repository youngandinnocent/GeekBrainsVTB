import React from "react";
import { shallow, configure }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { ProfileForm } from 'components/Profile/ProfileForm';

let initialState, successState, failureState;
beforeEach(() => {
  initialState = {
    formData: {
      name: { value: '', error: false },
      description: { value: '', error: false }
    }
  };

  successState = {
    formData: {
      name: { value: 'new name', error: false },
      description: { value: 'new description', error: false }
    }
  };

  failureState = {
    formData: {
      name: { value: '', error: true },
      description: { value: '', error: true }
    }
  };
});

describe('ProfileForm component', () => {

  it('filled fields and submitting form data', () => {
    const component = shallow(<ProfileForm />);
    expect(component.state()).toEqual(initialState);

    // form submit failed
    const event = { currentTarget: { name: 'name' } };
    component.instance().handleSend(event);
    component.instance().handleSend({ ...event, currentTarget: { name: 'description' } });
    expect(component.state()).toEqual(failureState);

    // filled input fields
    component.instance().handleInput({ ...event,
      target: {
        name: 'name',
        value: 'new name'
      }
    });
    component.instance().handleInput({ ...event,
      target: {
        name: 'description',
        value: 'new description'
      }
    });
    expect(component.state()).toEqual(successState);

    // form submit successful
    component.instance().handleSend({ ...event, currentTarget: { name: 'name' } });
    component.instance().handleSend({ ...event, currentTarget: { name: 'description' } });
    expect(component.state()).toEqual(initialState);
  });

  // it('failed propTypes', () => {
  //   const onSend = null;
  //   const component = shallow(<ProfileForm onSend = { onSend } />);
  //   expect(component.state()).toEqual(initialState);

  //   const event = { currentTarget: { name: 'name' } };
  //   component.instance().handleSend(event);
  //   component.instance().handleSend({ ...event, currentTarget: { name: 'description' } });
  //   expect(component.state()).toEqual(initialState);
  // });
});
