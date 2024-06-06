import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { api } from '../../api';
import { logCurrentStorage, storeAsyncStorageObject } from '../../storage/async-storage';
const LoginScreen = ({ setUser, signUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      try {
        const user = await api.users.getUserByEmailAndPassword({ email, password });
        await storeAsyncStorageObject('userInfo', user.id);
        await logCurrentStorage();
        setUser(user);
        signUp();
      } catch (error) {
        console.error("Error during login:", error);
        setError("An error occurred during login. Please try again later.");
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Wi Wa</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Text style={styles.errorText}>{error}</Text> 
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

const mapStateToProps = state => ({
    isSignUp: state.signUp.isSignUp,
    isManager: state?.userRole?.isManager,
  });
  
  const mapDispatchToProps = dispatch => ({
    setUser: (userData) => dispatch({ type: 'SET_USER_DATA', payload: userData }),

    signUp: () => dispatch({type: 'SIGN_UP'}),
    setIsManager: isManager =>
      dispatch({type: 'SET_IS_MANAGER', payload: isManager}),
  });
  
  export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
  