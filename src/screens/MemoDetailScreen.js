import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';
import 'firebase/firestore';
// import Timestamp from 'firebase/firestore';
// <Text style={styles.memoHeaderTitle}>{String(title).substring(0, 10)}</Text>
class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentDidMount() {
    const { memo } = this.props.navigation.state.params;
    this.setState({ memo });
  }


  render() {
    const { body } = this.state.memo;
    const title = String(body).substring(0, 10);
    console.log(this.state.memo.createdOn);
    const date = String(this.state.memo.createdOn);

    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>{title}</Text>
          <Text style={styles.memoHeaderDate}>{date}</Text>
        </View>
        <View style={styles.memoContent}>
          <Text>{body}</Text>
        </View>
        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('Edit'); }}
        >
          <FontAwesome size={24} color="#E31676" name="pencil" />
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // paddingTop: 90,
  },
  memoHeader: {
    height: 120,
    backgroundColor: '#17313c',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 50,
  },
});

export default MemoDetailScreen;
