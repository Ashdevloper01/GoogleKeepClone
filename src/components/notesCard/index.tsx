import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {DELETE_ICON, EDIT_ICON} from '../../assets/icons';

type CardProps = {
  title: string;
  notes: string;
  onEditPress: () => void;
  onDeletePress: () => void;
  color: string;
};

const Card: React.FC<CardProps> = ({
  color,
  title,
  notes,
  onEditPress,
  onDeletePress,
}) => {
  const getLuminance = (hexColor: string) => {
    const rgb = parseInt(hexColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    return 0.299 * r + 0.587 * g + 0.114 * b;
  };

  return (
    <View
      style={
        color
          ? [styles.cardContainer, {backgroundColor: color}]
          : styles.cardContainer
      }>
      <View style={styles.titleView}>
        <Text
          style={
            color
              ? [
                  styles.title,
                  {color: getLuminance(color) > 128 ? 'black' : 'white'},
                ]
              : styles.title
          }>
          {title}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onEditPress}>
            <Image
              source={EDIT_ICON}
              style={
                color
                  ? [
                      styles.icon,
                      {
                        tintColor:
                          getLuminance(color) > 128 ? 'black' : 'white',
                      },
                    ]
                  : styles.icon
              }
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDeletePress}>
            <Image
              source={DELETE_ICON}
              style={
                color
                  ? [
                      styles.icon,
                      {
                        tintColor:
                          getLuminance(color) > 128 ? 'black' : 'white',
                      },
                    ]
                  : styles.icon
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={
          color
            ? [
                styles.notes,
                {color: getLuminance(color) > 128 ? 'black' : 'white'},
              ]
            : styles.notes
        }>
        {notes}
      </Text>
    </View>
  );
};

export default Card;
