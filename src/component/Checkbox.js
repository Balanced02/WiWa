import * as React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewPropTypes,
} from 'react-native';
import colors from '../colors';
import fonts from '../fonts';

export const LABEL_POSITION = {
  RIGHT: 'right',
  LEFT: 'left',
};

export default class CircleCheckBox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    outerSize: PropTypes.number,
    filterSize: PropTypes.number,
    innerSize: PropTypes.number,
    outerColor: PropTypes.string,
    filterColor: PropTypes.string,
    innerColor: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    labelPosition: PropTypes.oneOf([LABEL_POSITION.RIGHT, LABEL_POSITION.LEFT]),
    styleCheckboxContainer: ViewPropTypes.style,
    styleLabel: Text.propTypes.style,
  };

  static defaultProps = {
    checked: false,
    outerSize: 16,
    filterSize: 12,
    innerSize: 8,
    outerColor: colors.black,
    filterColor: colors.white,
    innerColor: colors.black,
    label: '',
    labelPosition: LABEL_POSITION.RIGHT,
    styleLabel: { fontFamily: fonts.textLight, color: colors.black, fontSize: 12 },
  };

  constructor(props) {
    super(props);
    const outerSize =
      parseInt(props.outerSize) < 10 || isNaN(parseInt(props.outerSize))
        ? 10
        : parseInt(props.outerSize);
    const filterSize =
      parseInt(props.filterSize) > outerSize + 3 ||
      isNaN(parseInt(props.filterSize))
        ? outerSize - 3
        : parseInt(props.filterSize);
    const innerSize =
      parseInt(props.innerSize) > filterSize + 5 ||
      isNaN(parseInt(props.innerSize))
        ? filterSize - 5
        : parseInt(props.innerSize);

    const customStyle = StyleSheet.create({
      _circleOuterStyle: {
        width: outerSize,
        height: outerSize,
        borderRadius: outerSize / 2,
        backgroundColor: props.outerColor,
      },
      _circleFilterStyle: {
        width: filterSize,
        height: filterSize,
        borderRadius: filterSize / 2,
        backgroundColor: props.filterColor,
      },
      _circleInnerStyle: {
        width: innerSize,
        height: innerSize,
        borderRadius: innerSize / 2,
        backgroundColor: props.innerColor,
      },
    });

    this.state = {
      customStyle: customStyle,
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onToggle.bind(this)}>
        <View
          style={[styles.checkBoxContainer, this.props.styleCheckboxContainer]}>
          {this._renderLabel(LABEL_POSITION.LEFT)}
          <View
            style={[
              styles.alignStyle,
              this.state.customStyle._circleOuterStyle,
            ]}>
            <View
              style={[
                styles.alignStyle,
                this.state.customStyle._circleFilterStyle,
              ]}>
              {this._renderInner()}
            </View>
          </View>
          {this._renderLabel(LABEL_POSITION.RIGHT)}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _onToggle() {
    if (this.props.onToggle) {
      this.props.onToggle(!this.props.checked);
    }
  }

  _renderInner() {
    return this.props.checked ? (
      <View style={this.state.customStyle._circleInnerStyle} />
    ) : (
      <View />
    );
  }

  _renderLabel(position) {
    return this.props.label.length > 0 &&
      position === this.props.labelPosition ? (
      <Text style={[styles.checkBoxLabel, this.props.styleLabel]}>
        {this.props.label}
      </Text>
    ) : (
      <View />
    );
  }
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxLabel: {
    marginLeft: 5,
    marginRight: 5,
  },
});
