import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import CryptoJS from 'crypto-js';

const PasswordSaverScreen = () => {
  const [passwords, setPasswords] = useState([]);
  const [passwordInput, setPasswordInput] = useState('');

  const savePassword = () => {
    if (passwordInput) {
      const hashedPassword = CryptoJS.SHA256(passwordInput).toString(CryptoJS.enc.Hex);

      const newPasswords = [...passwords, { original: passwordInput, hashed: hashedPassword }];
      setPasswords(newPasswords);
      setPasswordInput('');

      Alert.alert('Success', 'Password saved securely.');
    } else {
      Alert.alert('Error', 'Please enter a password.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Secure Password Saver</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(text) => setPasswordInput(text)}
        value={passwordInput}
      />
      <Button title="Save Password" onPress={savePassword} />
      <Text style={styles.title}>Saved Passwords</Text>
      {passwords.map((entry, index) => (
        <View key={index} style={styles.passwordEntry}>
          <Text>Original Password: {entry.original}</Text>
          <Text>Hashed Password: {entry.hashed}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  passwordEntry: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default PasswordSaverScreen;
