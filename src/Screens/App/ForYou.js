import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import fonts from '../../fonts';
import colors from '../../colors';
import { ScrollView } from 'react-native-gesture-handler';

import ArrowRight from '../../../assets/images/arrow_right.png';

import ProductPreview from '../../component/ProductPreview';

class ForYou extends Component {
  render() {
    return (
      <ScrollView style={{ paddingTop: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text
            style={{
              fontFamily: fonts.text,
              color: colors.theme,
              marginLeft: 10,
            }}>
            Recommended for you
          </Text>
          <Image source={ArrowRight} style={{ marginTop: 3 }} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
        </ScrollView>
      </ScrollView>
    );
  }
}

export default ForYou;
