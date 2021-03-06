import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';


class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handleSubmit() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      // createdOn: new Date(),
      createdOn: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch(() => {
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoCreateInput}
          value={this.state.body}
          textAlignVertical="top"
          onChangeText={(text) => { this.setState({ body: text }); }}
          blurOnSubmit={false}
          multiline
        />
        <CircleButton
          color="ff007f"
          style={styles.editButton}
          onPress={this.handleSubmit.bind(this)}
        >
          <FontAwesome size={36} color="white" name="check" />
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoCreateInput: {
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
