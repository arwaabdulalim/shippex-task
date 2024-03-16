import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: calcWidth(16),
  },
  logo: {
    width: calcWidth(90),
    height: calcHeight(14),
  },
  img: {
    width: calcWidth(40),
    height: calcHeight(40),
  },
});

export default styles;
