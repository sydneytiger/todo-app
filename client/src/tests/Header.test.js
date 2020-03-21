/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Header from '../components/Header';

describe('Testing Header component', () => {
  it('should render without error', () => {
    const component = shallow(<Header ></Header>);
    const wrapper = component.find('.header');
    expect(wrapper.length).toBe(1);
  });

  it('should has a default taskCount and displayDate', () => {
    const component = shallow(<Header ></Header>);
    const properties = component.instance().props;

    expect(properties.taskCount).toBe(0);
    //expect(properties.displayDate).toEqual(new Date());
  })

  describe('testing taskcount display', () => {
    it('should render 3 tasks', () => {
      const component = shallow(<Header taskCount="3"></Header>);
      const wrapper = component.find('.test-taskCount');
      expect(wrapper.text()).toBe('3 tasks');
    });
  
    it('should render 1 task', () => {
      const component = shallow(<Header taskCount="1"></Header>);
      const wrapper = component.find('.test-taskCount');
      expect(wrapper.text()).toBe('1 task');
    });
  
    it('should render 0 task', () => {
      const component = shallow(<Header taskCount="0"></Header>);
      const wrapper = component.find('.test-taskCount');
      expect(wrapper.text()).toBe('0 task');
    });
  });

  describe('testing date display', () => {
    let component;
    beforeAll(() => {
      const date = new Date('August 19, 1975 23:15:30');
      component = shallow(<Header displayDate={date}></Header>);
    });

    it('should display day correctly', () => {
      const wrapper = component.find('.test-day');
      expect(wrapper.text()).toEqual('Wednesday,');
    });
  
    it('should display date correctly', () => {
      const wrapper = component.find('.test-date');
      expect(wrapper.text()).toEqual('19th');
    });
  
    it('should display moneth correctly', () => {
      const wrapper = component.find('.test-month');
      expect(wrapper.text()).toEqual('August');
    });
  })
  

});