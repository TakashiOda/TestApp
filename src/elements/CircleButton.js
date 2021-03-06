import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight,
} from 'react-native';
// import { Ionicons, FontAwesom } from '@expo/vector-icons';

class CircleButton extends React.Component {
  render() {
    const { style, color, onPress } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }
    return (
      <TouchableHighlight
        style={[styles.container, style]}
        onPress={onPress}
        underlayColor="transparent"
      >
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
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
    bottom: 50,
    right: 50,
  },
  circleButton: {
    width: 60,
    height: 60,
    margin: 0,
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

export default CircleButton;
