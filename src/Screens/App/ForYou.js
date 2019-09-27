import React, {Component} from 'react';
import {View, Text} from 'react-native';
import fonts from '../../fonts';
import colors from '../../colors';
import {ScrollView} from 'react-native-gesture-handler';

import ProductPreview from '../../component/ProductPreview';

class ForYou extends Component {
  render() {
    return (
      <ScrollView style={{ paddingTop: 10 }}>
        <View >
          <Text style={{fontFamily: fonts.text, color: colors.theme, marginLeft: 10}}>
            Recommended for you
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default ForYou;
