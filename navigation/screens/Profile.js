// Profile.js
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ navigation, route }) => {
    const [localUserData, setLocalUserData] = useState(route.params && route.params.userData);
    const [memberSince, setMemberSince] = useState('');
    const [userLocation, setUserLocation] = useState('');

    useEffect(() => {
        if (!localUserData) {
            setLocalUserData({
                name: 'John Doe',
                bio: 'Member since 2024.',
                email: 'johndoe@example.com',
                phone: '+1234567890',
            });
        }
        const currentDate = new Date();
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        setMemberSince(`Member since ${month}, ${year}`); // Changed space to comma
    }, []);

    useEffect(() => {
        if (route.params && route.params.updatedUserData) {
            const updatedUserData = {
                ...localUserData,
                ...route.params.updatedUserData,
            };
            setLocalUserData(updatedUserData);
        }
    }, [route.params]);

    const goToEditProfile = () => {
        navigation.navigate("EditProfile", { userData: localUserData });
    };

    const getLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Location permission denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            let reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
            const { name, street, city, postalCode, region, countryCode } = reverseGeocode[0];
            setUserLocation(`${name}, ${street}, ${city}, ${postalCode}, ${region}`);
        } catch (error) {
            console.error(error);
        }
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
                    <Text style={styles.memberSince}>{memberSince}</Text>
                    <Text style={styles.bio}>{localUserData.bio}</Text>
                    <View style={styles.contactContainer}>
                        <Text style={styles.contactText}>Email: {localUserData.email}</Text>
                        <Text style={styles.contactText}>Phone: {localUserData.phone}</Text>
                        <Text style={styles.contactText}>Location: {userLocation}</Text>
                    </View>
                </>
            )}
            <TouchableOpacity
                style={styles.locationButton}
                onPress={getLocation}
                accessibilityLabel="Get Location"
            >
                <Text style={styles.locationButtonText}>Get Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.editButton}
                onPress={goToEditProfile}
                accessibilityLabel="Edit Profile"
            >
                <Text style={styles.editButtonText}>Edit Profile</Text>
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
    memberSince: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
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
    locationButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 10,
    },
    locationButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
