import React, { Component } from 'react';
import {
    ListView,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import AddTodo from './container/AddTodo'
import VisibleTodoList from './container/VisibleTodoList'
import Footer from './components/Footer'
import rootRedditReducer from './reducer/reddit'
import { visibilityFilter, todos } from './reducer/todo'
import { selectSubreddit, fetchPosts } from './action/reddit'
const loggerMiddleware = createLogger()
/** Implmentation of combineReducer --- Similar with combineReducers in react-redux */
// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         // console.log('reducer', reducers);
//         return Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 // console.log('nextState b4 ', nextState);
//                 // console.log('reducer key', reducers[key](state[key], action));
//                 nextState[key] = reducers[key](state[key], action);
//                 // console.log('nextState after', nextState);
//                 // console.log('key', key);
//                 return nextState;
//             },
//             {}
//         );
//     };
// };

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    rootRedditReducer
})

const store = createStore(todoApp, applyMiddleware(thunkMiddleware, loggerMiddleware))

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() =>
    console.log(store.getState())
)

// const store = createStore(todoApp);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoApp />
            </Provider>
        )
    }
}


class TodoApp extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { store } = this.context;

        return (
            <View>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </View>
        )
    }
}

TodoApp.contextTypes = {
    store: React.PropTypes.object
}