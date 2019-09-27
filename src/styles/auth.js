import {StyleSheet} from 'react-native';
import colors from '../colors';
import fonts from '../fonts';

const styles = StyleSheet.create({
  header: {fontFamily: fonts.headerBold, fontSize: 24, color: colors.black},
  spacer: {marginTop: 10},
  headerText: {fontFamily: fonts.textLight, fontSize: 13, color: colors.black},
  authAction: {color: colors.danger, textDecorationLine: 'underline'},
  forgotPassword: {
    color: colors.black,
    fontSize: 12,
    fontFamily: fonts.textLight,
  },
  submitButton: {
    backgroundColor: colors.theme,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 30,
    shadowColor: colors.theme,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  submitButtonText: {color: colors.white, fontFamily: fonts.text, fontSize: 18},
  otherAuth: { color: colors.black, fontFamily: fonts.text, fontSize: 16 }
});

export default styles;
