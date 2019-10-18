import React, { Component, Fragment } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'

import Background from '../../../assets/images/background.png';

import TextInput from '../../component/TextInput';
import Checkbox from '../../component/Checkbox';

import styles from '../../styles/auth';

// Icons
import profileImage from '../../../assets/images/user_profile.png';
import passwordImage from '../../../assets/images/eye.png';
import loginImage from '../../../assets/images/login.png';

// Social Icons
import facebookIcon from '../../../assets/images/facebook.png';
import twitterIcon from '../../../assets/images/twitter.png';
import googleIcon from '../../../assets/images/google.png';

import { RightLogo } from '../../component/Logo';

import colors from '../../colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      inputs: {
        username: '',
        password: '',
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

  toggleCheckbox = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  };

  login = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(result => {
      console.log(result)
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log(
          "Login success with permissions: " +
          result.grantedPermissions.toString()
        );
        let _responseInfoCallback = (error, result) => {
          if (error) {
            console.log(error)
            console.log('Error fetching data: ' + error.toString());
          } else {
            console.log(result)
            console.log('Success fetching data: ' + result.toString());
          }
        }

        // Create a graph request asking for user information with a callback to handle the response.
        const infoRequest = new GraphRequest(
          '/me',
          null,
          _responseInfoCallback,
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
      }
    },
      (error) => {
        console.log("Login fail with error: " + error);
      }
    );
  }

  render() {
    const {
      inputs: { username, password },
      checked,
    } = this.state;
    return (
      <ImageBackground source={Background} style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingLeft: 50, paddingRight: 50 }}>
          <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
              <View style={{ paddingTop: 50 }} />
              <RightLogo />
              <View style={{ paddingTop: 30 }} />
              <Fragment>
                <Image source={loginImage} />
              </Fragment>
              <View style={styles.spacer} />
              <Fragment>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={styles.headerText}>
                    Don't have an account {'  '}
                    <Text style={styles.authAction}>Create your Account</Text>
                  </Text>
                </TouchableOpacity>
              </Fragment>
              <View style={styles.spacer} />
              <View style={styles.spacer} />
              <View style={styles.spacer} />
              <View style={{ flex: 1 }}>
                <TextInput
                  editable
                  maxLength={40}
                  label="Username"
                  autoCapitalize="none"
                  name="usernameInput"
                  focusNextInput="passwordInput"
                  onSubmitEditing={() => {
                    if (this.passwordInput && this.passwordInput.focusInput) {
                      this.passwordInput.focusInput();
                    }
                  }}
                  returnKeyType="next"
                  autoCorrect={false}
                  value={username}
                  icon={profileImage}
                  onChangeText={text =>
                    this.handleInputChange(text, 'username')
                  }
                />
                <TextInput
                  ref={passwordInput => (this.passwordInput = passwordInput)}
                  editable
                  maxLength={40}
                  label="Password"
                  name="passwordInput"
                  autoCorrect={false}
                  value={password}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  icon={passwordImage}
                  onChangeText={text =>
                    this.handleInputChange(text, 'password')
                  }
                />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Checkbox
                    checked={checked}
                    animated={true}
                    duration={100}
                    label="Remember Password"
                    color={colors.black}
                    activeOpacity={1}
                    onToggle={this.toggleCheckbox}>
                    <Text>Hi</Text>
                  </Checkbox>
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </View>
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.login}>
                    <Text style={styles.submitButtonText}>Login</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.otherAuth}>Or login with:</Text>
                  <View style={styles.spacer} />
                  <View style={styles.spacer} />
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    <Image source={facebookIcon} />
                    <Image source={twitterIcon} />
                    <Image source={googleIcon} />
                  </View>
                </View>
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
