import React, { Component } from 'react';
import {
    TextInput,
    Button,
    View
} from 'react-native';
import { connect } from 'react-redux'
import { addTodo } from '../action/todo';


const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (input) => {
            dispatch(addTodo(input))
        }
    }
}

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        }
    }

    render() {

        return (
            <View style={{flexDirection: 'row', marginTop: 64,}}>
                <TextInput style={{ backgroundColor:'white', borderColor: 'black', borderWidth: 1, height: 40, width: 200 }} onChangeText={(text) => {
                    this.setState({ input: text });
                }} value={this.state.input} />
                <Button title="Add Todo"
                    onPress={() => {
                        this.props.onAddTodo && this.props.onAddTodo(this.state.input);
                        this.setState({
                            input: '',
                        })

                    }}
                />
            </View>

        )
    }
}

const AddToDoContainer = connect(null, mapDispatchToProps)(AddTodo)

export default AddToDoContainer