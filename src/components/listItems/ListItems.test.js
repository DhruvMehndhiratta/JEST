import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { findByTestAttribute, checkProps } from '../../utils'

describe("List Item Component", () => {

    describe("checking propTypes", () => {

        it("should not throw a warning", () => {
            const expectedProps = {
                title: "sample title test",
                desc: "sample description test"
            }
            const checkPropsError = checkProps(ListItem, expectedProps);
            expect(checkPropsError).toBeUndefined();
        })
    })

    describe("checking ListItem component", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: "Title sample test",
                desc: "description sample test"
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        it("should render without error", () => {
            const component = findByTestAttribute(wrapper, "ListItemComponent")
            expect(component.length).toBe(1)
        })

        it("should render a title", () => {
            const title = findByTestAttribute(wrapper, "ListItemTitle")
            expect(title.length).toBe(1)
        })

        it("should render description", () => {
            const description = findByTestAttribute(wrapper, "ListItemDescription")
            expect(description.length).toBe(1)
        })
    })

    describe("should not render", () => {
        let wrapper;
        beforeEach(() => {

            wrapper = shallow(<ListItem />)
        })

        it("component is not rendered", () => {
            const component = findByTestAttribute(wrapper, "ListItemTitle")
            expect(component.length).toBe(0);
        })

    })
})

