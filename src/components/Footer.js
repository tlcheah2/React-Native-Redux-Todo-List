import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import FilterLink from '../container/FilterLink'

export default class Footer extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 80 }}>
                <Text style={{ fontSize: 12 }}>{'SHOW: '}</Text>
                <FilterLink filter={'SHOW_ALL'} />
                <Text>{' , '}</Text>
                <FilterLink filter={'SHOW_COMPLETED'} />
                <Text>{' , '}</Text>
                <FilterLink filter={'SHOW_ACTIVE'} />
            </View>
        );
    }
}