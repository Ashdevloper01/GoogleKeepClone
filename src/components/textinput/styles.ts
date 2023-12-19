import { StyleSheet, ViewStyle } from 'react-native';
import { moderateScale } from '../../utils/deviceConfig';
import { COLOR_BLACK } from '../../utils/colors';

interface Styles {
  container:ViewStyle
  input: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_BLACK,
    borderRadius: moderateScale(8),
    height: moderateScale(40),
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(16),
  },
});

export default styles;

