import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView

const TestScreen = () => {
    const navigation = useNavigation();

    const goToNewHomeScreen = () => {
        navigation.navigate("Home");
    };

    return (
        <GestureHandlerRootView>
            <View>
                <Text>TestScreen</Text>
                <TouchableOpacity style={styles.shopNowButton} onPress={goToNewHomeScreen}>
                    <Text style={styles.shopNowButtonText}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    );
}

export default TestScreen;

const styles = StyleSheet.create({
    shopNowButton: {
        marginTop: 30,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    shopNowButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
