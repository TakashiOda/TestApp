import React from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';
import * as SecureStore from 'expo-secure-store';
import Loading from '../elements/Loading';


class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
  }


  async componentDidMount() {
    this.setState({ isLoading: true });
    const email = await SecureStore.getItemAsync('email');
    const password = await SecureStore.getItemAsync('password');
    if (email && password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          this.navigateToHome();
        })
        .catch(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  navigateToHome() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
    this.props.navigation.navigate('Home');
  }

  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        SecureStore.setItemAsync('email', this.state.email);
        SecureStore.setItemAsync('password', this.state.password);
        this.setState({ isLoading: false });
        this.navigateToHome();
      })
      .catch();
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Loading text="ログイン中" isLoading={this.state.isLoading} />
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#c70F66"
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
          <Text style={styles.signupText}>メンバー登録する</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
    // paddingTop: 120,
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signup: {
    marginTop: 25,
    alignSelf: 'center',
  },
  signupText: {
    color: '#696969',
    fontSize: 20,
  },
});

export default LoginScreen;
