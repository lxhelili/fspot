import moxios from 'moxios';
import { testStore } from './../../utils';
import { getItems } from './../actions/items';

describe('getItems action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = {
            flowers: [
                {
                    name: 'Alpski volcin 1',
                    latin_name: 'Daphne alpina 1'
                },
                {
                    name: 'Alpski volcin 2',
                    latin_name: 'Daphne alpina 2'
                },
                {
                    name: 'Alpski volcin 3',
                    latin_name: 'Daphne alpina 3'
                }
            ],
            loading: false
        };
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(getItems())
        .then(() => {
            const newState = store.getState();
            expect(newState.items).toStrictEqual(expectedState);
        })
        
    });

});