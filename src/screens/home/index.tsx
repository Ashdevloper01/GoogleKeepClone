import {View, SafeAreaView, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../components/header';
import NotesInput from '../../components/textinput';
import Card from '../../components/notesCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {ADD_ICON, EDIT_ICON} from '../../assets/icons';
import {moderateScale} from '../../utils/deviceConfig';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../App';

type NoteItem = {
  id: number;
  title: string;
  note: string;
  color?: string;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<NoteItem[]>([]);
  const [renderData, setRenderData] = useState<NoteItem[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (text?.trim()?.length) {
      const filteredData = data?.filter(
        item =>
          item?.title?.toLowerCase()?.includes(text?.toLowerCase()) ||
          item?.note?.toLowerCase()?.includes(text?.toLowerCase()),
      );
      setRenderData(filteredData || []);
    } else {
      setRenderData(data || []);
    }
  }, [text, data]);

  const getData = async () => {
    try {
      const existingNotesJSON = await AsyncStorage.getItem('notes');
      const existingNotes: NoteItem[] = existingNotesJSON
        ? JSON.parse(existingNotesJSON)
        : [];

      setData(existingNotes);
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteItem = async (itemId: number) => {
    try {
      Alert.alert('Delete', 'Do you want to delete this note', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const updatedItems = data.filter(item => item.id !== itemId);
            await AsyncStorage.setItem('notes', JSON.stringify(updatedItems));
            setData(updatedItems);
          },
        },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to delete item. Please try again.');
    }
  };

  const editItem = (itemId: number) => {
    navigation.navigate('CreateNote', {itemId: itemId});
  };

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  const renderItem = ({item}: {item: NoteItem}) => {
    return (
      <Card
        title={item?.title}
        notes={item?.note}
        color={item?.color || 'defaultColor'}
        onDeletePress={() => deleteItem(item?.id || -1)}
        onEditPress={() => editItem(item?.id || -1)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerView}>
        <Header
          title="Notes"
          rightIcon={ADD_ICON}
          onRightIconPress={() => navigation.navigate('CreateNote')}
        />
        <NotesInput
          value={text}
          onChangeText={val => setText(val)}
          placeholder="Search your notes..."
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={renderData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
