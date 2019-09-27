import React, {Component} from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from '../../styles/search';

import hamburgerIcon from '../../../assets/images/hambuger.png';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.appBackground}>
        <View style={styles.searchBox}>
          <Image source={hamburgerIcon} />
          <TextInput style={styles.searchInput} placeholder="Search Products" />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
