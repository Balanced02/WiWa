import React, {Component} from 'react';
import {
  TextInput,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../colors';

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

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const {label, ...props} = this.props;
    const outputRange = [
      Platform.OS === 'ios' ? 18 : 15,
      Platform.OS === 'ios' ? 0 : -5,
    ];
    const labelStyle = {
      position: 'absolute',
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
      <TouchableWithoutFeedback onPress={() => this.input.focus()}>
        <View
          style={{
            paddingTop: Platform.OS === 'ios' ? 18 : 0,
          }}>
          <Animated.Text style={labelStyle}>{label}</Animated.Text>
          <TextInput
            {...props}
            ref={input => (this.input = input)}
            style={{
              // height: 26,
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
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default FloatingLabelInput;
