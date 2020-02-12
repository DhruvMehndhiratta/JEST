import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../utils';
import SharedButton from './index';

describe("shared button component", () => {

    describe("checking prop Types", () => {

        it("should not throw any warning", () => {
            const expectedProps = {
                buttonText: "Example Button Text",
                emitEvent: () => { }
            }

            const propsError = checkProps(SharedButton, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe("renders", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: "Sample Text",
                emitEvent: () => { }
            }
            wrapper = shallow(<SharedButton {...props} />)
        })

        it("should render a button", () => {
            const button = findByTestAttribute(wrapper, "buttonComponent")
            expect(button.length).toBe(1);
        })

    })

})