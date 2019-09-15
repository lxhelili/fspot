import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../utils';
import React from 'react';

const setUp = () => {
    const wrapper = shallow(<App />);
    return wrapper;
};

describe('App Component', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

});