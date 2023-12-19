import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
