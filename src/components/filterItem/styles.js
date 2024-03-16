import {StyleSheet, Platform} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  wrapper: {
    height: calcHeight(40),
    // width: calcWidth(100),
    marginRight: calcWidth(10),
    marginBottom: calcHeight(5),
    backgroundColor: colors.cloud,
    justifyContent: 'center',
    alignItem: 'center',
    borderRadius: 10,
  },
  text: {
    color: colors.greish,
    fontSize: calcFont(16),
    fontFamily: 'Inter-Regular',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
});

export default styles;
