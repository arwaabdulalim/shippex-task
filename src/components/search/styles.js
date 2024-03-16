import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    height: calcHeight(42),
    marginHorizontal: calcWidth(16),
  },
  icon: {
    width: calcWidth(15),
    height: calcHeight(15),
    marginLeft: calcWidth(15),
  },
});

export default styles;
