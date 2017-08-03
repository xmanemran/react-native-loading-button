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
            width: new Animated.Value(100)
        }
    }

    defaultLoadingAnimation(start, end){
        this.defaultLoadingValue.width.setValue(start)
        Animated.timing(
            this.defaultLoadingValue.width,
            {
                toValue: end,
                duration: 200,
            }
        ).start()
    }

    loadingContent(){
        return (
            <ActivityIndicator color="#FFF"/>
        )
    }

    loadingFire(){
        this.setState({loading: true});
        this.defaultLoadingAnimation(100, 40);
        setTimeout(()=>{
            this.defaultLoadingAnimation(40, 100);
            this.setState({loading: false});
        }, 1000);
    }

    defaultLoadingButton(){
        return (
            <Animated.View style={[styles.defaultLoadingRoot, {width: this.defaultLoadingValue.width}]}>
                <TouchableOpacity
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