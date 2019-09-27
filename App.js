import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import AppContainer from './src/navigation/AppNavigator';

import store from './store'

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
