import Header from './Header';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('render <Header /> components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.isEmptyRender()).toEqual(false);
  });
});
