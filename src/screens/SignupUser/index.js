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
      // const response = await axios.post('http://10.0.2.2:8000/api/accounts/register/', formData);
      // const user = { ...formData , userId:response.data.id};
      setSuccess('User registered successfully!');
      setError(null);
      await setUser(formData);
      await storeAsyncStorageObject('userInfo', formData); 
      signUp();
    } catch (error) {
      setError('Registration failed!');
      setSuccess(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>עובד</Text>
      <TextInput
        style={styles.input}
        placeholder="שם פרטי"
        value={formData.first_name}
        onChangeText={(value) => handleChange('first_name', value)}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.last_name}
        onChangeText={(value) => handleChange('last_name', value)}
      /> */}
      {/* <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
      /> */}
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        secureTextEntry
        onChangeText={(value) => handleChange('password', value)}
      /> */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>התחבר</Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {success && <Text style={styles.successText}>{success}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'column',
    paddingTop:100
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
    backgroundColor: '#1B4533',
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