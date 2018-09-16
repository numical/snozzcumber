import tap from 'tap';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);
tap.equals(wrapper.contains(<div>Snozzcumber</div>), true);
