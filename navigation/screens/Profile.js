// Profile.js
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
=======
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
>>>>>>> 87e2aa8a714357b5e53c52c560528cfedd0b27db
import { useNavigation } from '@react-navigation/native';

const Profile = ({ navigation, route }) => {
    const [localUserData, setLocalUserData] = useState(route.params && route.params.userData);

    useEffect(() => {
        if (!localUserData) {
            setLocalUserData({
                name: 'John Doe',
                bio: 'Member since 2024.',
                email: 'johndoe@example.com',
                phone: '+1234567890',
            });
        }
    }, []);

    useEffect(() => {
        if (route.params && route.params.userData) {
            setLocalUserData(route.params.userData);
        }
    }, [route.params]);

    const goToEditProfile = () => {
        navigation.navigate("EditProfile", { userData: localUserData });
<<<<<<< HEAD
    };

    const goToTestScreen = () => {
        navigation.navigate("TestScreen")
    }

    const goToNewHomeScreen = () => {
        navigation.navigate("Home");
=======
>>>>>>> 87e2aa8a714357b5e53c52c560528cfedd0b27db
    };

    return (
        <View style={styles.container}>
            {localUserData && (
                <>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
                    />
                    <Text style={styles.name}>{localUserData.name}</Text>
                    <Text style={styles.bio}>{localUserData.bio}</Text>
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactText}>Email: {localUserData.email}</Text>
                        <Text style={styles.contactText}>Phone: {localUserData.phone}</Text>
                    </View>
                </>
            )}
            <TouchableOpacity
                style={styles.editButton}
                onPress={goToEditProfile}
                accessibilityLabel="Edit Profile"
            >
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
<<<<<<< HEAD

            {/* testing */}
            <TouchableOpacity
                style={styles.editButton}
                onPress={goToTestScreen}
                accessibilityLabel="Test Screen"
            >
                <Text style={styles.editButtonText}>Go to Test</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.editButton}
                onPress={goToNewHomeScreen}
                accessibilityLabel="New Home Screen"
            >
                <Text style={styles.editButtonText}>Go to New Home</Text>
            </TouchableOpacity>
=======
>>>>>>> 87e2aa8a714357b5e53c52c560528cfedd0b27db
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    contactContainer: {
        marginBottom: 20,
    },
    contactText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    editButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 10,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});