import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
const LoginPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleLogin = () => {
  if (username === 'user' && password === 'password') {
    Alert.alert('Login Successful', 'Welcome back, User!');
} else {
Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
}
};
return (
<View style={styles.container}>
<Text style={styles.title}>Login</Text>
<TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsername(text)} value={username}
/>
<TextInput
style={styles.input} placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} value={password}
/>
<Button
title="Login" onPress={handleLogin}
/>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16,
}, title: {
fontSize: 24, marginBottom: 16,
},
input: {
height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8, width: '100%',
},
});
export default LoginPage;
