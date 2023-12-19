import {View, SafeAreaView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import NotesInput from '../../components/textinput';
import styles from './styles';
import Header from '../../components/header';
import Button from '../../components/button/button';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLOR_GREY} from '../../utils/colors';

const {
  SliderValuePicker,
  SliderHuePicker,
  SliderSaturationPicker,
} = require('react-native-slider-color-picker');
const tinycolor = require('tinycolor2');

export type CreateNoteScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'CreateNote'
>;

type Props = {
  navigation: CreateNoteScreenNavigationProp;
  route: any;
};

const CreateNote: React.FC<Props> = ({navigation, route}) => {
  const {itemId} = route?.params || {};
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [pickedColor, setPickedColor] = useState<string>(COLOR_GREY);

  useEffect(() => {
    if (itemId) {
      getAsyncData();
    }
  }, []);

  const getAsyncData = async () => {
    try {
      const items = await AsyncStorage.getItem('notes');
      const itemsData: any[] = items ? JSON.parse(items) : [];
      const itemToEdit = itemsData.find((obj: any) => obj?.id === itemId);
      if (itemToEdit) {
        setTitle(itemToEdit?.title);
        setNote(itemToEdit?.note);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createNotes = async () => {
    try {
      if (!title.trim() || !note.trim()) {
        Alert.alert('Error', 'Please enter both title and note.');
        return;
      }

      const existingNotesJSON = await AsyncStorage.getItem('notes');
      const existingNotes: any[] = existingNotesJSON
        ? JSON.parse(existingNotesJSON)
        : [];

      const newNote = {
        id: Math.random() * Math.random() * 1000,
        title: title,
        note: note,
        color: pickedColor,
      };
      const updatedNotes = [newNote, ...existingNotes];

      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));

      setTitle('');
      setNote('');
      navigation.navigate('Home');
    } catch {
      Alert.alert('Error creating note... Please try again');
    }
  };

  const changeColor = (colorHsvOrRgb: object, resType: string) => {
    if (resType === 'end') {
      setPickedColor(tinycolor(colorHsvOrRgb).toHexString());
    }
  };

  const saturationPickerStyle = {
    height: 12,
    borderRadius: 6,
    backgroundColor: tinycolor({
      h: tinycolor(pickedColor).toHsv().h,
      s: 1,
      v: 1,
    }).toHexString(),
  };

  const editNote = async () => {
    try {
      const existingNotesJSON = await AsyncStorage.getItem('notes');
      const existingNotes: any[] = existingNotesJSON
        ? JSON.parse(existingNotesJSON)
        : [];

      const updatedItems = existingNotes.map((item: any) =>
        item.id === itemId ? {...item, title: title, note: note} : item,
      );
      await AsyncStorage.setItem('notes', JSON.stringify(updatedItems));

      setTitle('');
      setNote('');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Create a Note" showBackButton={true} />
      <View style={{flex: 1, marginTop: 50}}>
        <View style={styles.headerView}>
          <NotesInput
            value={title}
            onChangeText={val => setTitle(val)}
            placeholder="Write the title..."
          />
          <NotesInput
            value={note}
            onChangeText={val => setNote(val)}
            placeholder="Write your note..."
          />
          {!itemId ? (
            <View>
              <GestureHandlerRootView style={styles.container}>
                <View style={styles.huePickerViewStyle}>
                  <SliderHuePicker
                    oldColor={pickedColor}
                    trackStyle={[styles.huePickerStyle]}
                    thumbStyle={styles.thumb}
                    useNativeDriver={true}
                    onColorChange={changeColor}
                  />
                </View>
                <View style={styles.saturationPickerViewStyle}>
                  <SliderSaturationPicker
                    oldColor={pickedColor}
                    trackStyle={[styles.saturationPickerTrackStyle]}
                    thumbStyle={styles.thumb}
                    useNativeDriver={true}
                    onColorChange={changeColor}
                    style={saturationPickerStyle}
                  />
                </View>
                <View style={styles.valuePickerViewStyle}>
                  <SliderValuePicker
                    oldColor={pickedColor}
                    minimumValue={0.02}
                    step={0.05}
                    trackStyle={[styles.valuePickerTrackStyle]}
                    trackImage={require('react-native-slider-color-picker/brightness_mask.png')}
                    thumbStyle={styles.thumb}
                    onColorChange={changeColor}
                    style={styles.valuePickerStyle}
                  />
                </View>
              </GestureHandlerRootView>
            </View>
          ) : null}

          <Button
            title={itemId ? 'Edit Note' : 'Add Note'}
            buttonStyle={styles.button}
            onPress={itemId ? editNote : createNotes}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateNote;
