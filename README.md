# react-native-loading-button

### React native button with activity indicator


#### Install

```
npm install react-native-loading-button --save
```


#### Example

```javascript
import LoadingButton from 'react-native-loading-button';
<LoadingButton
    onPress={this.onPressHandler.bind(this)}
    isLoading={this.state.isLoading}
/>
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