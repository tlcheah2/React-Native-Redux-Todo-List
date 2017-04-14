import React, { Component } from 'react';
import {
    ListView,
} from 'react-native';
import Todo from './Todo';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows(this.props.todos),
        };
        console.log('todolist', props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('todoList nextProps', nextProps);
        this.setState({
            dataSource: ds.cloneWithRows(nextProps.todos)
        })
    }

    render() {
        const { todos } = this.props;
        // if (todos) {
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(todo) => {
                    console.log(todo);
                    return <Todo {...todo} onTodoClick={(id) => {
                        this.props.onTodoClick && this.props.onTodoClick(id)
                    }} />
                }}
            />
        )
        // } else {
        //     return null;
        // }

    }
}