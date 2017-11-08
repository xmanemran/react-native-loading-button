# react-native-loading-button

### React native button with activity indicator

![Before Loading](/example/1.png?raw=true "Before Loading")
![When loading](/example/2.png?raw=true "When loading")

#### Install

```
npm install react-native-loading-button --save
```


#### Example

```javascript
import LoadingButton from 'react-native-loading-button';

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
```

### Props

| Name  | Detail & Type | Default | 
| ------------- | ------------- | ------------- |
| onPress  | Button On press callback (function) | alert('press') |
| isLoading  | Start or stop animation boolean | false
| activityIndicatorColor  | Activity Indicator Color (string) | '#FFF' |
| activityIndicatorSize  | Activity Indicator Size (string) | 'small' | 
| viewStyle  | Main View style (object) | 'small' | 
| animationDelay  | How manny time will tack to animate (number)  | 200 | 
| whenAnimationViewWidth  | Main view size when animated | 40 | 
| enableWidthAnimation | Change width when animation | true | 