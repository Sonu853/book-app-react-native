import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, DatePickerAndroid,TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

const SignUpScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState(''); // Initialize date with the current date
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [formValidationError, setFormValidationError] = useState('');
  const [emailError,setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  

  const handleSignUp = () => {
    
    setPasswordMatchError('');
    setEmailError('');
    setFormValidationError('');
    setSuccessMessage('');

    if (password.trim() !== confirmpassword.trim()) {
      setPasswordMatchError('Passwords do not match');
     // Stop further processing if passwords do not match
    }

    // Check if any field is empty
    
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Invalid Email Format');
    
    }
    if (
      firstname.trim() === '' ||
      lastname.trim() === '' ||
      password.trim() === '' ||
      confirmpassword.trim() === '' ||
      gender.trim() === '' ||
      
      address1.trim() === '' ||
      address2.trim() === '' ||
      address3.trim() === ''
      
    ) {
      setFormValidationError('All fields are mandatory');
    
    }
    
    if (passwordMatchError === '' && emailError === '' && formValidationError === '') {
      setSuccessMessage('Successfully signed up!');
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Firstname"
          onChangeText={(text) => setFirstname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Lastname"
          onChangeText={(text) => setLastname(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmpassword}
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      {passwordMatchError !== '' && <Text style={styles.errorText}>{passwordMatchError}</Text>}
      <View style={styles.inputContainer}>
      
        <TextInput
          style={styles.input}
          placeholder="Firstname"
          onChangeText={(text) => setFirstname(text)}
        />
        <Picker
        style={{ ...styles.input, backgroundColor: '#f0f0f0' }}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
        
      </View>
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address 1"
          onChangeText={(text) => setAddress1(text)}
        />
        
      </View>
      {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder="Address 2"
          onChangeText={(text) => setAddress2(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address 3"
          onChangeText={(text) => setAddress3(text)}
        />
        
      </View>
     
      {formValidationError !== '' && <Text style={styles.errorText}>{formValidationError}</Text>}
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button
        title="Already have an account? Log In"
        onPress={() => navigation.navigate('Login')}
      />
      
       {successMessage !== '' && <Text style={styles.successText}>{successMessage}</Text>}
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 12,
    marginRight: 10, 
  },
  errorText: {
    color: 'red',
    marginTop: -24,
    marginBottom: 12
  
  },
  successText: {
    color: 'green',
    marginBottom: 12,
  },
});

export default SignUpScreen;
