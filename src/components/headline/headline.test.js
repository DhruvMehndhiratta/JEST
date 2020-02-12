import React from 'react'
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttribute, checkProps } from '../../utils';


const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}

describe("overall test for the headline component", () => {

    describe("checking proptypes", () => {
        it("should not through a warning", () => {
            const expectedProps = {
                header: "header",
                desc: "description",
                tempArr: [
                    { firstName: "dhruv", lastName: "Joe", email: "sda@gmai.com", age: 24, onlineStatus: true }
                ]
            }
            const propsError = checkProps(Headline, expectedProps);
            expect(propsError).toBeUndefined();

        })
    })

    describe("have props", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: "test header",
                desc: "test-description"
            }
            wrapper = setUp(props);
        })
        it("it should render before errors", () => {
            const component = findByTestAttribute(wrapper, "headlineComponent")
            expect(component.length).toBe(1);
        })
        it("should render h1 tag", () => {
            const h1 = findByTestAttribute(wrapper, "headline-header")
            expect(h1.length).toBe(1);
        })
        it("should render the description", () => {
            const description = findByTestAttribute(wrapper, "headline-desc")
            expect(description.length).toBe(1);
        })
    })
    describe("have no props", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })
        it("should not render", () => {
            const component = findByTestAttribute(wrapper, "headlineComponent")
            expect(component.length).toBe(0)
        })
    })
})