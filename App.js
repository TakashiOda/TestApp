import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import CircleButton from './src/elements/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListScreen />
      <CircleButton>
        <FontAwesome size={24} color="white" name="plus" />
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
