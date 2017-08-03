import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    ActivityIndicator
} from 'react-native';

export default class LoadingButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading: false
        };
        this.defaultLoadingValue = {
            width: styles.defaultLoadingRoot.width
        }
    }

    defaultLoadingAnimation(){
        Animated.timing(
            this.defaultLoadingValue.width,
            {
                toValue: 50,
                duration: 200,
            }
        ).start()
    }

    loadingContent(){
        return (
            <ActivityIndicator/>
        )
    }

    loadingFire(){
        this.setState({loading: true});
        this.defaultLoadingAnimation();
        setTimeout(()=>{
            this.setState({loading: false});
        }, 10000);
    }

    defaultLoadingButton(){
        return (
            <Animated.View style={[styles.defaultLoadingRoot, {width: this.defaultLoadingValue.width}]}>
                <TouchableOpacity
                    style={styles.defaultLoadingRoot}
                    onPress={this.loadingFire.bind(this)}
                >
                    {this.state.loading ? this.loadingContent() : <Text style={styles.defaultLoadingText}>Login</Text>}
                </TouchableOpacity>
            </Animated.View>
        )
    }

    render(){
        return (
            <View>
                {this.defaultLoadingButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        width: 100,
        height: 30,
    },
    defaultLoadingRoot : {
        width: 100,
        height: 30,
        backgroundColor: '#25CED1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    defaultLoadingText: {
        color: '#FFF'
    }
});