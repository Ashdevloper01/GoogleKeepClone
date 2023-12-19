// components/Header.tsx

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {BACK_ICON} from '../../assets/icons';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  rightIcon?: ImageSourcePropType | undefined;
  onRightIconPress?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton,
  rightIcon,
  onRightIconPress,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={handleBackPress} style={styles.leftIconView}>
          <Image source={BACK_ICON} style={styles.icon} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={styles.rightIconView}>
          <Image source={rightIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
