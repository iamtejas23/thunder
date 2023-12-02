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
        setBreachResult([]);
      }
    } catch (error) {
      setBreachResult([]);
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
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    marginBottom:18,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#0074E4', // Add a custom color
    padding: 10,
    marginBottom: 10,
    borderRadius: 5, // Add rounded corners
  },
  scrollView: {
    width: '100%',
  },
  breachItem: {
    padding: 10,
    marginBottom: 5,
    marginTop:15,
    backgroundColor: '#ECECEC',
    borderRadius: 5, // Add rounded corners
  },
});

export default EmailBreachChecker;
