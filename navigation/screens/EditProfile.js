import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

const EditProfile = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const userData = route.params && route.params.userData;

    useEffect(() => {
        if (userData) {
            setName(userData.name);
            setEmail(userData.email);
            setPhone(userData.phone);
        }
    }, [userData]);

    const handleSave = () => {
        if (!name || !email || !phone) {
            Alert.alert('Error', 'Name, Email, and Phone are required fields.');
            return;
        }
        // Update the user data
        const updatedUserData = {
            name,
            email,
            phone,
        };
        // Pass the updated data back to the Profile screen
        navigation.navigate('Profile', { updatedUserData }); // Passing updatedUserData instead of userData
    }

    return (
        <ScrollView style={styles.container} behavior="padding" >
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Enter Name"
                accessibilityLabel="Name"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Enter Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                accessibilityLabel="Email"
            />
            <Text style={styles.label}>Phone</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={(text) => setPhone(text)}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                accessibilityLabel="Phone"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave} accessibilityLabel="Save Profile">
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    saveButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 8,
    },
    saveButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});