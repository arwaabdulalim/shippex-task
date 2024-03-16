import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  handleIndicator: {
    height: 5,
    width: 36,
    backgroundColor: colors.steel,
  },
  btnsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: calcWidth(20),
    marginVertical: calcHeight(12),
  },
  container: {
    paddingLeft: calcWidth(20),
  },
  cancelDoneBtn: {
    color: colors.primary,
    fontSize: calcFont(16),
    fontFamily: 'Inter-Medium',
  },
  filterTxt: {
    color: colors.black,
    fontSize: calcFont(18),
    fontFamily: 'Inter-Medium',
  },
  separator: {
    width: '100%',
    height: calcHeight(1),
    backgroundColor: colors.silver,
  },
  statusTxt: {
    color: colors.greish,
    fontSize: calcFont(13),
    fontFamily: 'Inter-Medium',
    marginVertical: calcHeight(12),
  },
  filtersWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
