import React from 'react';
// import firebase from 'firebase';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';
import 'firebase/firestore';

class MemoDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: {
        body: '',
        createdOn: '',
        key: '',
      },
    };
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const { memo } = params;
    this.setState({
      memo: {
        body: memo.body,
        createdOn: memo.createdOn,
        key: memo.key,
      },
    });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const { body } = this.state.memo;
    const date = new Date(this.state.memo.createdOn.seconds * 1000);
    const dateYMD = date.toISOString().split('T')[0];
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>{body.substring(0, 15)}</Text>
          <Text style={styles.memoHeaderDate}>{dateYMD}</Text>
        </View>
        <View style={styles.memoContent}>
          <Text>{body}</Text>
        </View>
        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('Edit', { ...this.state.memo, returnMemo: this.returnMemo.bind(this) }); }}
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
