import {StyleSheet, Platform} from 'react-native';
import colors from '../colors';
import fonts from '../fonts';

const styles = StyleSheet.create({
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    elevation: 20,
    padding: Platform.OS === 'ios' ? 10 : 0,
    paddingLeft: 10,
    shadowOffset: {width: 2, height: 5},
    shadowColor: colors.gray,
    shadowOpacity: 1.0,
  },
  searchInput: {flex: 1, fontSize: 14, fontFamily: fonts.text, paddingLeft: 10},
});

export default styles;
