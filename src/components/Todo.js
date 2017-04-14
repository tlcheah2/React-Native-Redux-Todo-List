import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text,
} from 'react-native';

export default class Todo extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('todo nextProps', nextProps);
    }

    render() {
        console.log('todo render');
        return (
            <TouchableHighlight
                onPress={() => { this.props.onTodoClick && this.props.onTodoClick(this.props.id) }}>
                <Text style={{textDecorationLine: this.props.completed ? 'line-through' : 'none'}}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );

    }
}