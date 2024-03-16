import {StyleSheet, Platform} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontFamily: 'Inter',
    fontSize: calcFont(15),
  },
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    width: calcWidth(15),
    height: calcHeight(20),
    marginRight: calcWidth(3),
  },
});

export default styles;
