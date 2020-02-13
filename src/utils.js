import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers';
import { middlewares } from './store';

export const findByTestAttribute = (component, attr) => {
    console.log(component, "component", attr)
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const checkPropsError = checkPropTypes(component.propTypes, expectedProps, "props", component.name);
    return checkPropsError;
}

export const testStore = (initState) => {
    const createStoreWithMiddleWares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleWares(rootReducer, initState)
}
