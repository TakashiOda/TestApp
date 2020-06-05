import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { FontAwesome } from '@expo/vector-icons';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// this.props.navigation.navigate('Edit');

class MemoListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: [],
    };
  }


  componentDidMount() {
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;
    const db = firebase.firestore();
    db.collection(`users/${uid}/memos`)
      .get()
      .then((querySnapshot) => {
        const memoList = [];
        querySnapshot.forEach((doc) => {
          memoList.push(doc.data());
        });
        this.setState({ memoList });
        console.log(memoList);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // eslint-disable-next-line
  handlePress() {
    this.props.navigation.navigate('Create');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <View>
          <CircleButton onPress={this.handlePress.bind(this)}>
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
