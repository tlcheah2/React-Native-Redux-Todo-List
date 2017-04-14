import * as types from '../action/types';

//Redux - writing a todolist reducer
export const todos = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                todo('undefined', action),
            ];
        case types.TOGGLE_TODO:
            return state.map(t => todo(t, action))
        // return Object.assign({}, todo, {completed: !todo.completed})

        default:
            return state;
    }
}

// Redux - Reducer composition with arrays
const todo = (state, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false,
            }
        case types.TOGGLE_TODO:
            if (state.id != action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
};

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

//AsyncAction - Reducer


