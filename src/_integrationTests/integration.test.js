import moxios from 'moxios';
import { testStore } from '../utils';
import { fetchPosts } from '../actions'


describe("fetch Posts action", () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    test("store is updated successfully", () => {
        const expectedState = [
            {
                title: "example title1",
                body: "sample body"
            },
            {
                title: "example title1",
                body: "sample body"
            },
            {
                title: "example title1",
                body: "sample body"
            }
        ]
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: expectedState
            })

        })

        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
})