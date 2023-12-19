import { ImageProps, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { moderateScale } from '../../utils/deviceConfig';
import { COLOR_BLACK } from '../../utils/colors';

type HeaderStyles = {
  container: ViewStyle;
  leftIconView: ViewStyle;
  rightIconView:ViewStyle;
  backButtonText: TextStyle;
  title: TextStyle;
  rightIconText: TextStyle
  icon:ImageProps;
}

const styles = StyleSheet.create<HeaderStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(60),
    paddingHorizontal: moderateScale(16),
  },
  leftIconView: {
    position: 'absolute',
    left: moderateScale(16),
    width:moderateScale(25),
    height:moderateScale(25),
  },
  rightIconView: {
    position: 'absolute',
    width:moderateScale(25),
    height:moderateScale(25),
    right: moderateScale(16),
  },
  icon:{
    width:moderateScale(25),
    height:moderateScale(25),
    resizeMode:'contain'
  },
  backButtonText: {
    fontSize: moderateScale(18),
    color: COLOR_BLACK,
  },
  rightIconText: {
    fontSize: moderateScale(20),
    color: COLOR_BLACK,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: COLOR_BLACK,
  },
});

export default styles;
