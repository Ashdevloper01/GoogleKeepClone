import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.25) =>
  size + (scale(size) - size) * factor;

export const getDimensions = () => {
  const {height, width} = Dimensions.get('window');
  return {height, width};
};

export const getDeviceHeight = Dimensions.get('window').height;
export const getDeviceWidth = Dimensions.get('window').width;

export const isIOS = () => Platform.OS === 'ios';
