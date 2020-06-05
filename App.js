import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import Appbar from './src/components/Appbar';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import CircleButton from './src/elements/CircleButton';

const Stack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ホーム: MemoListScreen,
    Detail: MemoDetailScreen,
    MemoCreate: MemoCreateScreen,
    Edit: MemoEditScreen,
  },
  {
    initialRouteName: 'ホーム',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2C4956',
      },
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default class App extends React.Component {
  render() {
    const Layout = createAppContainer(Stack);
    return (
      <Layout />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
