import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import YourImage from './assets/email.png';

const EmailBreachChecker = () => {
  const [email, setEmail] = useState('');
  const [breachResult, setBreachResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const checkEmailBreach = async () => {
    if (!email) {
      return;
    }

    setLoading(true);

   

      if (response.status === 200) {
        setBreachResult(response.data);
      } else if (response.status === 404) {
        setBreachResult([{ Name: 'No breaches found', Description: 'This email has not been breached.' }]);
      } else {
        // Handle other status codes
        setBreachResult([]);
        console.error(`Error checking the email. Status Code: ${response.status}`);
      }
    } catch (error) {
      // Display an error message to the user
      setBreachResult([{ Name: 'Error', Description: 'An error occurred while checking the email.' }]);
      console.error('Error checking the email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={YourImage} style={styles.logo} />
        <Text style={styles.title}>Check if an email has been breached</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Check" onPress={checkEmailBreach} disabled={loading} />
      {loading && <Text>Checking...</Text>}
      <ScrollView style={styles.scrollView}>
        {breachResult.map((breach, index) => (
          <View key={index} style={styles.breachItem}>
            <Text>{breach.Name}</Text>
            <Text>{breach.Description}</Text>
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
    backgroundColor: '#f5f5f5', // Light background color
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 18,
    borderRadius: 75, // Make the logo circular
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', // Blue color
    textAlign: 'center', // Center the text horizontally
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#000000',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff', // White background
    color: '#333', // Dark text color
  },
  button: {
    backgroundColor: '#0074E4',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    width: '100%',
    marginTop: 10,
  },
  breachItem: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  breachName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#0074E4',
  },
  breachDescription: {
    fontSize: 16,
    color: '#333',
  },
});


export default EmailBreachChecker;
