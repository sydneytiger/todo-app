/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Header from '../components/Header';

const setup = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe('Testing Header component', () => {
  it('should render without error', () => {
    const component = setup();
    const wrapper = component.find('.header');
    expect(wrapper.length).toBe(1);
  });

  describe('Testing default props', () => {
    let properties;
    beforeAll(() => {
      const component = setup();
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
      const component = setup({taskCount: 3})
      const wrapper = component.find('.test-taskCount');
      expect(wrapper.text()).toBe('3 tasks');
    });
  
    it('should render 1 task', () => {
      const component = setup({taskCount: 1})
      const wrapper = component.find('.test-taskCount');
      expect(wrapper.text()).toBe('1 task');
    });
  
    it('should render 0 task', () => {
      const component = setup({taskCount: 0})
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

      component = setup({displayDate:displayDateVal});
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