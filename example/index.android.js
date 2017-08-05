/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import LoadingButton from './LoadingButton';

export default class example extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        };
    }

    onPressHandler(){
        this.setState({isLoading: true});
        setTimeout(()=>{
            this.setState({isLoading: false});
        }, 1000);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <LoadingButton
                    onPress={this.onPressHandler.bind(this)}
                    isLoading={this.state.isLoading}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('example', () => example);
