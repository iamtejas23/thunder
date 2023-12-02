import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import crypto from 'crypto-js';

const PwnedPasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [pwnedResult, setPwnedResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const checkPwnedPassword = async () => {
    if (!password) {
      return;
    }

    setLoading(true);

    try {
      const passwordHash = crypto.SHA1(password).toString().toUpperCase();
      const prefix = passwordHash.substring(0, 5);
      const suffix = passwordHash.substring(5);

      const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);

      if (response.status === 200) {
        const hashes = response.data.split('\n');
        const matchingHash = hashes.find((hash) => hash.startsWith(suffix));

        if (matchingHash) {
          const count = matchingHash.split(':')[1];
          setPwnedResult([{ Password: password, Count: count }]);
        } else {
          setPwnedResult([{ Password: password, Count: '0' }]);
        }
      } else {
        setPwnedResult([]);
      }
    } catch (error) {
      setPwnedResult([]);
      console.error('Error checking the password:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/password.png')} // Replace with your image source
        style={styles.image}
      />
      <Text style={styles.title}>Check if a password has been breached!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Make magic" style={styles.loading} onPress={checkPwnedPassword} disabled={loading} />
      {loading && <Text style={styles.loadingText}>Checking...</Text>}
      <ScrollView style={styles.scrollView}>
        {pwnedResult.map((result, index) => (
          <View key={index} style={styles.resultItem}>
            <Text style={styles.resultText}>Password: {result.Password}</Text>
            <Text style={styles.resultText}>This password has been seen: {result.Count} times before</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 150, // Adjust the width and height as needed
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: "#D3D3D3",
    backgroundColor: "transparent",
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
  },
  loadingText: {
    fontSize: 18,
    margin: 10,
    backgroundColor: "transparent",
  },
  scrollView: {
    width: '100%',
  },
  resultItem: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    marginTop: 18,
  },
  resultText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});

export default PwnedPasswordChecker;
