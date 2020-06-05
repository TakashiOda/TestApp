import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';


class MemoEditScreen extends React.Component {
  state = {
    body: 'aaaaaaaaaa',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          blurOnSubmit={false}
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton
          color="ff007f"
          style={styles.editButton}
          onPress={() => { this.props.navigation.goBack(); }}
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
    // paddingTop: 78,
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;
