import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export const Addbuttonview = (props) => {
    return (
        <View style={{ width: 80, height: 80 }}>
            <Button title={props.buttonName} onPress={props.onClick} color='#fa7a31' />
        </View>
    )

}

