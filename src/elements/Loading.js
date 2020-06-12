import React from 'react';
import {
  ActivityIndicator, StyleSheet, View, Text,
} from 'react-native';

const Loading = (props) => {
  const { text, isLoading } = props;
  if (!isLoading) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  text: {
    margin: 20,
    fontSize: 20,
  },
});

export default Loading;
