import React from 'react';
import {View, Image} from 'react-native';

import logo from '../../assets/images/logo.png'

const RightLogo = () => (
  <View style={{ alignSelf: 'flex-end' }} >
    <Image source={logo} style={{ width: 40, height: 40 }} />
  </View>
);

export {RightLogo};
