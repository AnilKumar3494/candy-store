// Profile.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
    };

    const goToTestScreen = () => {
        navigation.navigate("TestScreen")
    }

    const goToNewHomeScreen = () => {
        navigation.navigate("Home");
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
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 16,
        color: 'gray',
        marginVertical: 10,
        textAlign: 'center',
    },
    contactContainer: {
        marginVertical: 20,
    },
    contactText: {
        fontSize: 16,
    },
    editButton: {
        marginTop: 30,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});