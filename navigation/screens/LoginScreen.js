// LoginScreen.js (updated)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import validator from 'validator';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    const validationErrors = {};

    if (!validator.isLength(username, { min: 3, max: 30 })) {
      validationErrors.username = 'Username must be between 3 and 30 characters';
    }

    if (!validator.isStrongPassword(password)) {
      validationErrors.password = 'Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    try {
      // Make an API call to authenticate the user
      const response = await fetch(`http://localhost:${4000}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful, navigate to the NewHomeScreen
        navigation.navigate('NewHomeScreen');
      } else {
        // Login failed, set an error message
        const errorMessage = await response.json();
        setError(errorMessage.message);
      }
    } catch (error) {
      // Catch any unexpected errors
      setError('Enter the details or those cannot be empty');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: '/Users/naishalchauhan/candy-store/assets/premium_photo-1681487814165-018814e29155.webp', // Replace with your image URL
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        {error && error.username && (
          <Text style={styles.error}>{error.username}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        {error && error.password && (
          <Text style={styles.error}>{error.password}</Text>
        )}
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  form: {
    padding: 20,
  },
  input: {
    height: 70,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 18,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default LoginScreen;