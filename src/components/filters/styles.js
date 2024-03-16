import { StyleSheet, Platform } from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  icon: {
    width: calcWidth(18),
    height: calcHeight(18),
    marginRight: calcWidth(10),
  },
  btnsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: calcHeight(12),
    marginHorizontal: calcWidth(16),
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: colors.cloud,
    marginRight: calcWidth(5),
  },
  txt: {
    color: colors.darkgrey,
    fontFamily: 'Inter-Regular',
  },
  title: {
    fontFamily: 'Inter-Regular',
  },
});

export default styles;
