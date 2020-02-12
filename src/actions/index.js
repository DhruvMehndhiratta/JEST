import { types } from './types'
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
    try {

        await axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            dispatch({
                type: types.GET_POSTS,
                payload: res.data
            })
        }).catch(err => {
            console.log(err, "error ")
        })
    }
    catch (err) {

    }
}
