import React, {Component} from 'react';
import {
  TextInput,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import colors from '../colors';
import fonts from '../fonts';

class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this._animatedIsFocused = new Animated.Value(props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});
  focusInput = () => this[this.props.name].focus();

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const {label, icon, ...props} = this.props;
    const outputRange = [
      Platform.OS === 'ios' ? 18 : 15,
      Platform.OS === 'ios' ? 0 : -5,
    ];
    const labelStyle = {
      position: 'absolute',
      fontFamily: fonts.text,
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: outputRange,
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.gray, colors.black],
      }),
    };
    return (
      <TouchableWithoutFeedback onPress={this.focusInput}>
        <View
          style={{
            paddingTop: Platform.OS === 'ios' ? 18 : 0,
          }}>
          <Animated.Text style={labelStyle}>{label}</Animated.Text>
          <TextInput
            {...props}
            enablesReturnKeyAutomatically={true}
            ref={input => (this[props.name] = input)}
            style={{
              // height: 26,
              fontFamily: fonts.text,
              fontSize: 14,
              color: '#000',
              paddingBottom: Platform.OS === 'ios' ? 0 : 1,
              borderBottomWidth: 1,
              borderBottomColor: colors.gray,
            }}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            blurOnSubmit
          />
          {icon ? (
            <View
              style={{
                top: -25,
                display: 'flex',
                marginLeft: '91%',
              }}>
              <Image source={icon} />
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default FloatingLabelInput;
