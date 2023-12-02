// SecurityScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const SecurityScreen = () => {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(3); // Caesar Cipher shift value
  const [encryptedText, setEncryptedText] = useState('');

  const encrypt = () => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if (char.match(/[a-z]/i)) {
        const code = text.charCodeAt(i);
        if (char === char.toLowerCase()) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
      }
      result += char;
    }
    setEncryptedText(result);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Caesar Cipher Encryption/Decryption</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your text"
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Shift value"
        keyboardType="numeric"
        onChangeText={(shift) => setShift(parseInt(shift))}
        value={shift.toString()}
      />
      <Button title="Encrypt" onPress={encrypt} />
      <Text style={styles.result}>Encrypted Text:</Text>
      <Text style={styles.encryptedText}>{encryptedText}</Text>
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
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  encryptedText: {
    fontSize: 16,
  },
});

export default SecurityScreen;
