import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Background from '../../../assets/images/background.png';

import TextInput from '../../component/TextInput';

import styles from '../../styles/auth';

// Icons
import profileImage from '../../../assets/images/user_profile.png';
import passwordImage from '../../../assets/images/eye.png';
import registerImage from '../../../assets/images/register.png';

// Social Icons
import facebookIcon from '../../../assets/images/facebook.png';
import twitterIcon from '../../../assets/images/twitter.png';
import googleIcon from '../../../assets/images/google.png';

import {RightLogo} from '../../component/Logo';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        fullName: '',
        username: '',
        password: '',
        cPassword: '',
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
    const {
      inputs: {fullName, username, password, cPassword},
    } = this.state;
    return (
      <ImageBackground source={Background} style={{flex: 1}}>
        <View style={{flex: 1, paddingLeft: 50, paddingRight: 50}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === 'ios' ? 'position' : 'padding'}>
              <View style={{paddingTop: 50}} />
              <RightLogo />
              <View style={{paddingTop: 30}} />
              <Fragment>
                <Image source={registerImage} />
              </Fragment>
              <View style={styles.spacer} />
              <Fragment>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.headerText}>
                    Have an account? {'  '}
                    <Text style={styles.authAction}>Login</Text>
                  </Text>
                </TouchableOpacity>
              </Fragment>
              <View style={styles.spacer} />
              <View style={styles.spacer} />
              <View style={styles.spacer} />
              <View style={{flex: 1}}>
                <TextInput
                  editable
                  maxLength={40}
                  label="Full Name"
                  autoCapitalize="none"
                  name="fullNameInput"
                  onSubmitEditing={() => {
                    if (this.usernameInput && this.usernameInput.focusInput) {
                      this.usernameInput.focusInput();
                    }
                  }}
                  returnKeyType="next"
                  autoCorrect={false}
                  value={fullName}
                  icon={profileImage}
                  onChangeText={text =>
                    this.handleInputChange(text, 'fullName')
                  }
                />
                <TextInput
                  ref={usernameInput => (this.usernameInput = usernameInput)}
                  editable
                  maxLength={40}
                  label="Username"
                  autoCapitalize="none"
                  name="usernameInput"
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
                  onSubmitEditing={() => {
                    if (this.cPassword && this.cPassword.focusInput) {
                      this.cPassword.focusInput();
                    }
                  }}
                  returnKeyType="next"
                  autoCorrect={false}
                  value={password}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  icon={passwordImage}
                  onChangeText={text =>
                    this.handleInputChange(text, 'password')
                  }
                />
                <TextInput
                  ref={cPassword => (this.cPassword = cPassword)}
                  editable
                  maxLength={40}
                  label="Confirm Password"
                  name="passwordInput"
                  autoCorrect={false}
                  value={cPassword}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  icon={passwordImage}
                  onChangeText={text =>
                    this.handleInputChange(text, 'cPassword')
                  }
                />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Main')}>
                    <Text style={styles.submitButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.otherAuth}>Or register with:</Text>
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
                <View style={styles.spacer} />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default RegisterScreen;
