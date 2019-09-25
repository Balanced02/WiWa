import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import LoginScreen from './src/Screens/Auth/Login';

import store from './store';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store().store}>
        <SafeAreaView style={{flex: 1}}>
          <AppContainer />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
