/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import TodoItem from '../components/TodoItem';

const setup = (props = {}) => {
  return shallow(<TodoItem {...props} />);
};

describe('Testing TodoItem component', () => {
  it('should render without error', () => {
    // const component = shallow(<TodoItem ></TodoItem>);
    // const wrapper = component.find('.todoItem');
    // expect(wrapper.length).toBe(1);
  });

});