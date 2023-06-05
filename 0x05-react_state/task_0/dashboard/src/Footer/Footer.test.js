import Footer from './Footer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('render <Footer /> components', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('<Footer /> components contains Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains('Copyright ')).toEqual(true);
  });
});
