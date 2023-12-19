import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { moderateScale } from "../../utils/deviceConfig";
import { COLOR_BLUE } from "../../utils/colors";

type Styles = {
  button:ViewStyle;
  buttonText:TextStyle;
}

const styles: Styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_BLUE,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(8),
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});

export default styles;
