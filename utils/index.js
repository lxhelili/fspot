import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/reducers';
import { middleWare } from './../src/store';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};


export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};