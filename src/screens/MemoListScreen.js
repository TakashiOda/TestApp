import React from 'react';
import { StyleSheet, View } from 'react-native';
// import firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <View>
          <CircleButton onPress={() => { this.props.navigation.navigate('Edit'); }}>
            <FontAwesome size={36} color="white" name="plus" />
          </CircleButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#FFFDF6',
    backgroundColor: '#ddd',
  },
});

export default MemoListScreen;
