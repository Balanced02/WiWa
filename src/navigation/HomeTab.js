import React, {Component} from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import fonts from '../fonts';
import colors from '../colors';

import styles from '../styles/home';

import SearchComponent from '../component/SearchComponent';

import ForYou from '../Screens/App/ForYou';
import {ScrollView} from 'react-native-gesture-handler';

const routenames = {
  ForYou: 'For You',
  AroundYou: 'Around You',
  Categories: 'Categories',
  TopDeals: 'Top Deals',
};

const TabNavigator = createMaterialTopTabNavigator(
  {
    ForYou: ForYou,
    AroundYou: ForYou,
    Categories: ForYou,
    TopDeals: ForYou,
  },
  {
    initialRouteName: 'ForYou',
    lazy: true,
    tabBarPosition: 'bottom',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarLabel: () => {
        const {routeName} = navigation.state;
        if (routenames[routeName]) {
          return (
            <Text
              style={{
                fontFamily: fonts.textLight,
                fontSize: 13,
                color: colors.black,
              }}>
              {routenames[routeName]}
            </Text>
          );
        }
        return (
          <Text
            style={{
              fontFamily: fonts.textLight,
              fontSize: 13,
              color: colors.black,
            }}>
            {routeName}
          </Text>
        );
      },
    }),
    tabBarOptions: {
      showIcon: true,
      style: {
        backgroundColor: 'transparent',
        color: colors.theme,
        fontFamily: fonts.text,
      },
      indicatorStyle: {
        backgroundColor: 'transparent',
        borderColor: colors.theme,
        borderBottomWidth: 3,
      },
      labelStyle: {
        margin: 0,
        padding: 0,
      },
      tabStyle: {
        width: 100,
      },
      activeTintColor: colors.theme,
      inactiveTintColor: colors.gray,
      showLabel: true,
      upperCaseLabel: false,
      keyboardHidesTabBar: true,
      scrollEnabled: true,
    },
  },
);

class HomeTab extends Component {
  static router = TabNavigator.router;
  render() {
    return (
      <ScrollView contentContainerStyle={styles.appBackground}>
        <SearchComponent navigation={this.props.navigation} />
        <TabNavigator navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default HomeTab;
