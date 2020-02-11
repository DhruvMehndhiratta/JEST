export const findByTestAttribute = (component, attr) => {
    console.log(component, "component", attr)
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}