import React, {Component} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/search';

import hamburgerIcon from '../../assets/images/hambuger.png';

class SearchComponent extends Component {
  render() {
    return (
      <View style={styles.searchBox}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Image source={hamburgerIcon} />
        </TouchableOpacity>
        <TextInput style={styles.searchInput} placeholder="Search Products" />
      </View>
    );
  }
}

export default SearchComponent;
