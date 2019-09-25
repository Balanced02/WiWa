import {StyleSheet} from 'react-native';
import colors from '../colors'

const styles = StyleSheet.create({
  header: {fontFamily: 'FredokaOne-Regular', fontSize: 24, color: "#000000"},
  spacer: { marginTop: 10 },
  headerText: {fontFamily: 'NunitoSans-Regular', fontSize: 13, color: "#000000"},
  authAction: { color: colors.danger, textDecorationLine: "underline" }
});

export default styles;
