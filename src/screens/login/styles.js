import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: calcWidth(16),
    paddingTop: calcHeight(24),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    fontFamily: 'Inter-SemiBold',
    fontSize: calcFont(32),
    marginVertical: calcHeight(12),
  },
  desc: {
    color: colors.darkgrey,
    fontFamily: 'Inter',
    fontSize: calcFont(15),
    marginVertical: calcHeight(15),
  },
  btnWrapper: {
    marginBottom: calcHeight(32),
  },
});

export default styles;
