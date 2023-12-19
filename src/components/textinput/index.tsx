import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import styles from './styles';

interface CustomTextInputProps extends TextInputProps {
  containerStyle?: object;
}

const NotesInput: React.FC<CustomTextInputProps> = ({
  containerStyle,
  ...restProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={styles.input} {...restProps} />
    </View>
  );
};

export default NotesInput;
