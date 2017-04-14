import React, { Component } from 'react'
import { TouchableHighlight, Text } from 'react-native'


export default class Link extends Component {
    render() {
        return (
            <TouchableHighlight onPress={() => { this.props.onClick && this.props.onClick(this.props.filter) }}>
                <Text style={{ fontSize: 12, fontWeight: this.props.active ? 'bold' : 'normal' }}>{this.props.filter}</Text>
            </TouchableHighlight>
        )
    }
}