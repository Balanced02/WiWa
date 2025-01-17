import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import laptopImage from '../../assets/images/laptop.jpeg';
import colors from '../colors';
import fonts from '../fonts';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class FormerProductPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: true,
    };
  }
  render() {
    const { preview } = this.state;
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.setState({ preview: false })}
        onPressOut={() => this.setState({ preview: true })}>
        <ImageBackground
          source={laptopImage}
          style={{
            width: 120,
            height: 120,
          }}
          imageStyle={{ borderRadius: 10 }}
          resizeMode="cover">
          {preview ? (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'rgba(0, 0, 0, 0.23)',
                justifyContent: 'space-between',
                borderRadius: 10,
              }}>
              <View
                style={{
                  alignSelf: 'flex-end',
                  backgroundColor: colors.theme,
                  borderRadius: 20,
                  padding: 5,
                  margin: 5,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.text,
                    color: colors.white,
                  }}>
                  N
                </Text>
              </View>
              <View
                style={{
                  margin: 5,
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.41)',
                  padding: 2,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.text,
                    color: colors.white,
                    textAlign: 'center',
                  }}>
                  N15, 000
                </Text>
              </View>
            </View>
          ) : null}
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

class ProductPreview extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: colors.white,
        width: 130, margin: 5, marginTop: 10,
      }}>
        <ImageBackground
          source={laptopImage}
          style={{
            width: 130,
            height: 100,
          }}
          imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
          resizeMode="cover">
          <View style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.23)',
            borderTopRightRadius: 10, borderTopLeftRadius: 10,
            paddingRight: 5
          }} >
            <View
              style={{
                alignSelf: 'flex-end',
                backgroundColor: colors.danger,
                borderRadius: 20,
                height: 20,
                width: 20,
                marginTop: 90,
                alignItems: 'center'
              }}>
              <Text style={{
                fontFamily: fonts.text,
                color: colors.white,
              }} >N</Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            backgroundColor: 'transparent',
            padding: 5,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 10,
              color: colors.gray,
              fontFamily: fonts.textLight,
            }}>
            Macbook Pro 15'
            </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.black,
              fontFamily: fonts.text,
            }}>
            N15, 000
            </Text>
        </View>
      </View>
    );
  }
}

export default ProductPreview;
