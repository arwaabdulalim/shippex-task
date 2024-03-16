import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: calcWidth(16),
    alignItems: 'center',
    marginBottom: calcHeight(12),
  },
  title: {
    color: colors.black,
    fontFamily: 'Inter-SemiBold',
    fontSize: calcFont(22),
  },
  markView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  markTxt: {
    color: colors.primary,
    fontFamily: 'Inter-Regular',
    fontSize: calcFont(14),
  },
  checkBox: {
    width: calcWidth(20),
    height: calcHeight(20),
    marginHorizontal: calcWidth(5),
  },
  item: {
    marginVertical: calcHeight(5),
  },
});

export default styles;
