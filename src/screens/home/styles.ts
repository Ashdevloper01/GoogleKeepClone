import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from '../../utils/deviceConfig';
import { COLOR_GREY, COLOR_WHITE } from '../../utils/colors';

type Styles = {
  safeAreaView: ViewStyle;
  container: ViewStyle & {
    height: string,
    paddingTop: number,
  };
  headerView: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLOR_WHITE,
    flex:1
  },
  container: {
    paddingHorizontal: moderateScale(16),
    backgroundColor: COLOR_WHITE,
    height: '100%',
    paddingTop: moderateScale(16),
    flex:1
  },
  headerView: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(24),
    backgroundColor: COLOR_GREY,
  },
});

export default styles;
