import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  checkBox: {
    width: calcWidth(20),
    height: calcHeight(20),
    marginHorizontal: calcWidth(5),
  },

  itemWrapper: {
    backgroundColor: colors.cloud,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: calcWidth(10),
    marginHorizontal: calcWidth(16),
  },
  box: {
    width: calcWidth(40),
    height: calcHeight(40),
    marginLeft: calcWidth(5),
  },
  billTyp: {
    color: colors.charocal,
    fontFamily: 'Inter-Regular',
    fontSize: calcFont(12),
  },
  trackingNo: {
    color: colors.black,
    fontFamily: 'Inter-SemiBold',
    fontSize: calcFont(16),
  },
  destination: {
    color: colors.darkgrey,
    fontFamily: 'Inter-Regular',
    fontSize: calcFont(12),
  },

  arrow: {
    width: calcWidth(6),
    height: calcHeight(6),
  },
  detailsWrapper: {
    marginHorizontal: calcWidth(10),
  },
  destnationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  origin: {
    color: colors.primary,
    fontFamily: 'Inter-Regular',
    fontSize: calcFont(10),
  },
  city: {
    color: colors.black,
    fontFamily: 'Inter-Regular',
    fontSize: calcFont(15),
  },
  address: {
    color: colors.greish,
    fontFamily: 'Inter-Regular',
    fontSize: calcFont(12),
  },

  expandArrow: {
    width: calcWidth(24),
    height: calcHeight(24),
    marginLeft: calcWidth(10),
  },
  expandedView: {
    backgroundColor: colors.water,
    padding: 14,
    width: '95%',
    alignSelf: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  expandedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dashedLine: { width: '92%', alignSelf: 'center' },
  arrowIcon: {
    width: calcWidth(16),
    height: calcHeight(14),
  },
  btnsWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: calcHeight(25),
  },
  btn: {
    backgroundColor: colors.lavender,
    marginRight: calcWidth(20),
  },

  button: { backgroundColor: colors.bright },
  icon: {
    width: calcWidth(18),
    height: calcHeight(18),
    marginRight: calcWidth(10),
  },
});

export default styles;
