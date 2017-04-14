//AsyncAction - Action
import * as types from './types'

export function selectSubreddit(subreddit) {
    return {
        type: types.SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: types.INVALIDATE_SUBREDDIT,
        subreddit
    }
}

function requestPosts(subreddit) {
    return {
        type: types.REQUEST_POSTS,
        subreddit
    }
}

function receivePosts(subreddit, json) {
    return {
        type: types.RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}
