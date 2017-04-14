import * as types from '../action/types';

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
    }
}