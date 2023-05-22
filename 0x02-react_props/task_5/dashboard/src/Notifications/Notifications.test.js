// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

Enzyme.configure({ adapter: new Adapter() });

describe('<Notifications />', () => {
  it('<Notifications /> renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('<Notifications /> verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').length).toEqual(3);
  });
  it('<Notifications /> verify that Notifications renders the text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
  });
});
