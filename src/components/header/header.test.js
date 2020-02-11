import React from 'react';
import { shallow } from 'enzyme'
import Header from './index';
import { findByTestAttribute } from '../../utils';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component;
}



describe("Header component render check", () => {
    let component;

    beforeEach(() => {
        component = setUp()
    })

    it("should render without errors", () => {
        const wrapper = findByTestAttribute(component, "header-component")
        expect(wrapper.length).toBe(1);
    })

    it("should render a logo", () => {
        const logo = findByTestAttribute(component, "logo")
        expect(logo.length).toBe(1);
    })

})