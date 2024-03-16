import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: calcWidth(345),
    height: Platform.OS === 'ios' ? calcHeight(50) : calcHeight(60),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: 'Inter-Bold',
    fontSize: calcFont(15),
    lineHeight: calcHeight(22),
  },
  halfButton: {
    width: calcWidth(170),
    height: Platform.OS === 'ios' ? calcHeight(45) : calcHeight(50),
  },
  smallButton: {
    width: calcWidth(450) / 4,
    height: Platform.OS === 'ios' ? calcHeight(45) : calcHeight(50),
  },
  disabledButton: {
    backgroundColor: colors.silver,
  },
});

export default styles;
