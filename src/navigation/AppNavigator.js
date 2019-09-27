import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
// Authentication Screens
import LoginScreen from '../Screens/Auth/Login';
import RegisterScreen from '../Screens/Auth/Register';

// App Screens
import HomeTab from './HomeTab';

const MainNavigator = createDrawerNavigator(
  {
    Home: HomeTab,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Main',
  },
);

export default AppContainer = createAppContainer(AppNavigator);
