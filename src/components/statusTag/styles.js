import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.babyblue,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: calcWidth(66),
    height: calcHeight(24),
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.white,
  },
});

export default styles;
