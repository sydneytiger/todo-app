/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Header from '../components/Header';

describe('Testing Header component', () => {
  it('should render without error', () => {
    const component = shallow(<Header ></Header>);
    const wrapper = component.find('.header');
    expect(wrapper.length).toBe(1);
  });

  describe('Testing default props', () => {
    let properties;
    beforeAll(() => {
      const component = shallow(<Header ></Header>);
      properties = component.instance().props;
    });

    it('should has a default taskCount of 0', () => {
      expect(properties.taskCount).toBe(0);
    })

    it('should has a default displayDate of today', () => {
      expect(properties.displayDate.dayIndex).toEqual(new Date().getDay());
      expect(properties.displayDate.monthIndex).toEqual(new Date().getMonth());
      expect(properties.displayDate.date).toEqual(new Date().getDate());
    });
  });


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
      const testDate = new Date('August 19, 1975 23:15:30');
      const displayDateVal = {
        dayIndex: testDate.getDay(),
        monthIndex: testDate.getMonth(),
        date: testDate.getDate()
      }
      component = shallow(<Header displayDate={displayDateVal}></Header>);
    });

    it('should display day correctly', () => {
      const wrapper = component.find('.test-day');
      expect(wrapper.text()).toEqual('Tuesday,');
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