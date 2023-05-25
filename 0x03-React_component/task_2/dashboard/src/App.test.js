import App from './App';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('<App /> components Notification node', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').length).toEqual(1);
  });

  it('<App /> components contains Login Node', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').length).toEqual(1);
  });

  it('<App /> components contains Footer Node', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toEqual(1);
  });

  it('<App /> components contains Header Node', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toEqual(1);
  });
});
