import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cloud,
    borderWidth: 1,
    borderColor: colors.cloud,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: calcHeight(22),
    marginBottom: 12,
    width: calcWidth(350),
    height: calcHeight(50),
    alignSelf: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: calcFont(12),
    paddingLeft: calcWidth(15),
    width: '100%',
    color: colors.primary,
  },
  errorMsg: {
    color: colors.danger,
    fontSize: calcFont(10),
    fontFamily: 'Inter-Regular',
  },
});

export default styles;
