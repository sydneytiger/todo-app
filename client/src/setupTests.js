import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

// enzyme configuration
Enzyme.configure({ adapter: new EnzymeAdapter() });

// make Enzyme functions available in all test files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;