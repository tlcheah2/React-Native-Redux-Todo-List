
import React, { Component } from 'react';
import {
    Button,
    TextInput,
    TouchableHighlight,
    ListView,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

/*class Todo extends Component {
    // static propTypes = {
    //     text: PropTypes.
    // }

    render() {
        return (
            <TouchableHighlight
                onPress={() => {this.props.onTodoClick && this.props.onTodoClick()}}>
                <Text>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );

    }
}


class TodoList extends Component {
    render() {
        <ListView
            dataSource={this.props.visvileTodo}
            renderRow={(todo) => {
                return <Todo key={todo.id} {...todo} onTodoClick={this.props.onTodoClick(todo.id)} />
            }}
        />
    }
}*/



/*class FilterLink extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onFilterClicked()}>
                <Text>{this.props.filter}</Text>
            </TouchableHighlight>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <View>
                <Text>{'Show'}</Text>
                <FilterLink filter={'SHOW_ALL'} currentFilter={visibilityFilter} onFilterClicked={this.props.onFilterClicked} />
                <FilterLink filter={'SHOW_COMPLETED'} currentFilter={visibilityFilter} onFilterClicked={this.props.onFilterClicked} />
                <FilterLink filter={'SHOW_ACTIVE'} currentFilter={visibilityFilter} onFilterClicked={this.props.onFilterClicked} />
            </View>
        );
    }
}*/
