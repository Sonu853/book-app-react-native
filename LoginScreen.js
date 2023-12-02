import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');

    if (username.trim() !== 'sonu.saurav.2017@gmail.com' ) {
      setUsernameError('Invalid Email');
    }

    if (password.trim() !== '222222') {
      setPasswordError('Invalid password');
    }

    if (username.trim() === 'sonu.saurav.2017@gmail.com' && password.trim() === '222222') {
      console.log('Logging in:', username, password);
      navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUsername(text)}
      />
      {usernameError !== '' && <Text style={styles.errorText}>{usernameError}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
      <Button title="Log In" onPress={handleLogin} />
      <br/>
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: -15,
    marginBottom: 15
  
  },
});

export default LoginScreen;