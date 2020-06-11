import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight,
} from 'react-native';
// import { Ionicons, FontAwesom } from '@expo/vector-icons';

class EditButton extends React.Component {
  render() {
    const { color, onPress } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={onPress}
        underlayColor="transparent"
      >
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          <Text style={[styles.circleButtonTitle, { color: textColor }]}>
            {this.props.children}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 85,
    right: 55,
  },
  circleButton: {
    width: 60,
    height: 60,
    margin: 0,
    // alignSelf: 'center',
    // lineHeight: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 38,
    alignSelf: 'center',
  },
});

export default EditButton;
