import checkPropTypes from 'check-prop-types';


export const findByTestAttribute = (component, attr) => {
    console.log(component, "component", attr)
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const checkPropsError = checkPropTypes(component.propTypes, expectedProps, "props", component.name);
    return checkPropsError;
}
