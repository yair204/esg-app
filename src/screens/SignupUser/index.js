import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { routes } from '../../router/routes';
import { connect } from "react-redux";
import { storeAsyncStorageObject } from '../../storage/async-storage';


const SignupUserScreen = ({navigation,signUp,setUser}) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: 'e9wy09hy',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    
    console.log("formData",formData)
    try {
      const response = await axios.post('http://10.0.2.2:8000/api/accounts/register/', formData);
      const user = { ...formData , userId:response.data.id};
      console.log("🚀 ~ handleSubmit ~ user:", user)
      setSuccess('User registered successfully!');
      setError(null);
      await setUser(user);
      await storeAsyncStorageObject('userInfo', user.userId); 
      signUp();
    } catch (error) {
      setError('Registration failed!');
      setSuccess(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.first_name}
        onChangeText={(value) => handleChange('first_name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.last_name}
        onChangeText={(value) => handleChange('last_name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        secureTextEntry
        onChangeText={(value) => handleChange('password', value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {success && <Text style={styles.successText}>{success}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  successText: {
    color: 'green',
    marginTop: 10,
  },
});


const mapDispatchToProps = dispatch => ({
  signUp: () => dispatch({ type: "SIGN_UP" }),
  setUser: (userData) => dispatch({ type: 'SET_USER_DATA', payload: userData })
})

export const SignUpUser = connect(null, mapDispatchToProps)(SignupUserScreen);