import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import { Platform } from 'react-native';
// Push Notifications
// import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions';
// import Constants from 'expo-constants';
// Push Notifications
// import Appbar from './src/components/Appbar';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import ENV from './env.json';


const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Home: MemoListScreen,
    Detail: MemoDetailScreen,
    Create: MemoCreateScreen,
    Edit: MemoEditScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#2C4956',
        ...Platform.select({
          android: {
            height: 80,
          },
        }),
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
//   // eslint-disable-next-line
//   registerForPushNotificationsAsync = async () => {
//     // 実機端末か否かを判定
//     if (Constants.isDevice) {
//       const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//       let finalStatus = existingStatus;
//
//       // ユーザーによる通知の許可or許可しないが決定していないときのみ
//       if (existingStatus !== 'granted') {
//         const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//         finalStatus = status;
//       }
//
//       // ユーザーが通知許可しなかった場合は処理を抜ける
//       if (finalStatus !== 'granted') return;
//       // デバイストークンを取得する
//       const token = await Notifications.getExpoPushTokenAsync();
//       Alert.alert(token);
//     } else {
//       Alert.alert('プッシュ通知は、実機端末を使用してください。');
//     }
//   };
//
//   componentDidMount() {
//     this.registerForPushNotificationsAsync();
//   }

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
