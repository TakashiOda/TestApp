import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  render() {
    const { memo } = this.state;
    // const newDate = moment(new Date(1528101680 * 1000)).format('MM/DD/YYYY hh:MM');
    // const seconds = memo.createdOn.toDate().toISOString();
    // const seconds = memo.createdOn.timestamp.toDate();
    // databasesRef.doc(id).update({
    //   created_at: firebase.firestore.Timestamp.now()
    // });
    // console.log(seconds);
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>{memo.body}</Text>
          <Text style={styles.memoHeaderDate}>20202020</Text>
        </View>
        <View style={styles.memoContent}>
          <Text>{memo.body}</Text>
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
