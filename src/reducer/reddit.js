import * as types from '../action/types';
import { combineReducers } from 'redux'

const setSelectedSubreddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case types.SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

const posts = (state = { isFetching: false, didInvalidate: false, items: [] }, action) => {
    switch (action.type) {
        case types.INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            }
        case types.REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
            }
        case types.RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsBySubReddit = (state = {}, action) => {
    switch (action.type) {
        case types.INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state
    }
}

const rootRedditReducer = combineReducers({
    postsBySubReddit,
    setSelectedSubreddit,
})

export default rootRedditReducer