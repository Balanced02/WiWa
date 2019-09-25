import React, {Component, Fragment} from 'react';
import {ScrollView, View, Text, ImageBackground} from 'react-native';
import Background from '../../../assets/images/background.png';

import TextInput from '../../component/TextInput';
import styles from '../../styles/auth';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        username: '',
      },
    };
  }

  handleInputChange = (text, name) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: text,
      },
    });
  };

  render() {
    const {username} = this.state.inputs;
    return (
      <ImageBackground source={Background} style={{flex: 1}}>
        <ScrollView style={{marginTop: 50, padding: 20}}>
          <Fragment>
            <Text style={styles.header}>Login</Text>
          </Fragment>
          <View style={styles.spacer} />
          <Fragment>
            <Text style={styles.headerText}>
              Don't have an account {'  '}
              <Text style={styles.authAction}>Create your Account</Text>
            </Text>
          </Fragment>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={{flex: 1}}>
            <TextInput
              editable
              maxLength={40}
              label="Username"
              value={username}
              onChangeText={text => this.handleInputChange(text, 'username')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
