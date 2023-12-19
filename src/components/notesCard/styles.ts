import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { moderateScale } from "../../utils/deviceConfig";
import { COLOR_BLACK, COLOR_GREY } from "../../utils/colors";

interface Styles {
  cardContainer:ViewStyle,
  titleView:ViewStyle,
  title: TextStyle,
  notes:TextStyle,
  buttonContainer:ViewStyle,
  button: ViewStyle,
  icon: ImageStyle
}

const styles: Styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR_GREY,
    padding: moderateScale(16),
    borderRadius: moderateScale(8),
    marginVertical: moderateScale(8),
    elevation: moderateScale(2),
  },
  titleView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    width: '80%',
    color: COLOR_BLACK,
  },
  notes: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(18),
    marginTop: moderateScale(10),
    color: COLOR_BLACK,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '20%',
  },
  button: {
    borderRadius: moderateScale(4),
    paddingHorizontal: moderateScale(8),
    alignSelf: 'center',
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
  },
});

export default styles;
