// src/components/ManagerSignupForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { logCurrentStorage, storeAsyncStorageObject } from '../../storage/async-storage';
import { connect } from "react-redux";
import { routes } from '../../router/routes';

const SignupManagerScreen = ({navigation ,signUp,setUser,setIsManager}) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
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
    try {
      const response = await axios.post('http://10.0.2.2:8000/api/manager/signup/', formData);
      const user = {...formData,userId : response.data.id}
      console.log("🚀 ~ handleSubmit ~ user:", user)
      console.log("🚀 ~ handleSubmit ~ response:", response.data.id);
      setSuccess('Manager registered successfully!');
      setError(null);
      await storeAsyncStorageObject('userInfo', user.userId);
      await logCurrentStorage()
      setUser(user);
      setIsManager(true);//need to add validation
      signUp();
    } catch (error) {
      setError('Registration failed!');
      setSuccess(null);
    }
     
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manager Signup</Text>
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
        placeholder="Company Name"
        value={formData.company_name}
        onChangeText={(value) => handleChange('company_name', value)}
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
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
    setUser: (userData) => dispatch({ type: 'SET_USER_DATA', payload: userData }),
    setIsManager: (isManager) => dispatch({type: 'SET_IS_MANAGER', payload: isManager}),

  })
  
  export const SignUpManager = connect(null, mapDispatchToProps)(SignupManagerScreen);
