import { StyleSheet, ViewStyle } from 'react-native';
import { moderateScale } from '../../utils/deviceConfig';
import { COLOR_BLACK, COLOR_GREY, COLOR_WHITE } from '../../utils/colors';

type Styles = {
  safeAreaView: ViewStyle;
  container: ViewStyle;
  headerView: ViewStyle;
  button: ViewStyle;
  thumb: ViewStyle;
  huePickerStyle: ViewStyle;
  valuePickerStyle: ViewStyle;
  valuePickerViewStyle: ViewStyle;
  valuePickerTrackStyle: ViewStyle;
  saturationPickerViewStyle: ViewStyle;
  saturationPickerTrackStyle: ViewStyle;
  huePickerViewStyle: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  container: {
    paddingHorizontal: moderateScale(16),
  },
  headerView: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(24),
    backgroundColor: COLOR_WHITE,
  },
  button: {
    marginTop: moderateScale(40),
  },
  thumb: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderColor: COLOR_BLACK,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    shadowColor: COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  huePickerStyle: {
    height: moderateScale(12),
    width: '100%',
  },
  valuePickerStyle: {
    height: moderateScale(12),
    borderRadius: 6,
    backgroundColor: COLOR_BLACK,
  },
  valuePickerViewStyle: {
    marginTop: moderateScale(20),
    height: moderateScale(12),
    width: '100%',
  },
  valuePickerTrackStyle: {
    height: moderateScale(12),
    width: '100%',
  },
  saturationPickerViewStyle: {
    marginTop: moderateScale(20),
    height: moderateScale(12),
    width: '100%',
  },
  huePickerViewStyle: {
    marginTop: moderateScale(20),
    height: moderateScale(12),
    width: '100%',
  },
  saturationPickerTrackStyle: {
    height: moderateScale(12),
    width: '100%',
  },
});

export default styles;
