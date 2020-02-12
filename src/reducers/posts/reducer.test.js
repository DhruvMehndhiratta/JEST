import { types } from '../../actions/types'
import postsReducer from './reducer';

describe("Post Reducer", () => {
    it("should return initial state on default case", () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([])
    })

    it("should new State if any case matches", () => {
        const posts = [{ title: "Test 1" }, { title: "Test 2" }, { title: "Test 3" }];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState).toEqual(posts)
    })
})