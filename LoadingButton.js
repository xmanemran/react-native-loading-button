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
            width: new Animated.Value(props.viewStyle.width)
        }
    }

    defaultLoadingAnimation(start, end){
        this.defaultLoadingValue.width.setValue(start)
        Animated.timing(
            this.defaultLoadingValue.width,
            {
                toValue: end,
                duration: this.props.animationDelay,
            }
        ).start()
    }

    loadingContent(){
        return (
            <ActivityIndicator color={this.props.activityIndicatorColor} size={this.props.activityIndicatorSize}/>
        )
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isLoading)
            this.defaultLoadingAnimation(this.props.viewStyle.width, this.props.whenAnimationViewWidth);
        else
            this.defaultLoadingAnimation(this.props.whenAnimationViewWidth, this.props.viewStyle.width);
    }

    defaultLoadingButton(){
        return (
            <Animated.View style={[this.props.viewStyle, {width: this.props.enableWidthAnimation ? this.defaultLoadingValue.width : this.props.viewStyle.width}]}>
                <TouchableOpacity onPress={()=>{this.props.onPress()}} style={[styles.defaultLoadingTouch, {width: this.props.enableWidthAnimation ? styles.defaultLoadingTouch.width : this.props.viewStyle.width}]}>
                    {this.props.isLoading ? this.loadingContent() : this.props.childView || <Text style={styles.defaultLoadingText}>Login</Text>}
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

LoadingButton.defaultProps = {
    onPress: ()=>{
        alert('press');
    },
    isLoading: false,
    activityIndicatorColor: '#FFF',
    activityIndicatorSize: 'small',
    viewStyle: {
        width: 100,
        height: 30,
        backgroundColor: '#25CED1',
        borderRadius: 20
    },
    animationDelay: 200,
    whenAnimationViewWidth: 40,
    enableWidthAnimation: true,
};

const styles = StyleSheet.create({
    root: {
        width: 100,
        height: 30,
    },
    defaultLoadingTouch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultLoadingText: {
        color: '#FFF'
    }
});