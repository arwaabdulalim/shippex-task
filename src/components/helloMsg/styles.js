import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  helloTxt: {
    color: colors.darkgrey,
    fontFamily: 'Inter-Regular',
    fontSize: calcFont(14),
  },
  name: {
    color: colors.black,
    fontFamily: 'Inter-SemiBold',
    fontSize: calcFont(28),
  },
  wrapper: {
    marginHorizontal: calcWidth(16),
    marginTop: calcHeight(12),
  },
});

export default styles;
