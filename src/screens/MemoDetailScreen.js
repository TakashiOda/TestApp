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
      body: '',
      createdOn: '',
      key: '',
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    // const date = params.memo.createdOn;
    const { memo } = params;
    // console.log(typeof(memo.createdOn.seconds));
    this.setState({ body: memo.body, createdOn: memo.createdOn, key: memo.key });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const seconds = this.state.createdOn.seconds;
    const createdDate = new Date(seconds * 1000);
    console.log(createdDate);
    const year = createdDate.getFullYear();
    const month = createdDate.getMonth() + 1;
    const date = createdDate.getDate();
    console.log(year);
    console.log(month);
    console.log(date);

    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>{this.state.body}</Text>
          <Text style={styles.memoHeaderDate}>{`${year}/${month}/${date}`}</Text>
        </View>
        <View style={styles.memoContent}>
          <Text>{this.state.body}</Text>
        </View>
        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('Edit', { ...memo, returnMemo: this.returnMemo.bind(this) }); }}
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
