import React from 'react';
import { shallow } from 'enzyme'
import Header from './index';

it("it should render without errors", () => {
    const component = shallow(<Header />)
    const wrapper = component.find("logo-wrapper")
    console.log(wrapper.length)
    console.log(component.debug)
    expect(wrapper.length).toBe(1);
})