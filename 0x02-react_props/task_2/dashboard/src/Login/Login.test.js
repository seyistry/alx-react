import Login from './Login';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {
  it('render <Login /> components', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('renders 2 labels and 2 Input <Login /> components', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toEqual(2);
    expect(wrapper.find('input').length).toEqual(2);
  });
});
