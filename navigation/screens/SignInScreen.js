import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen({ route }) {
    const { promptAsync } = route.params;

    const candyIcons = [
        { name: "candy-cane", color: "#F8B195", top: 100, left: 50 },
        { name: "candy-cane", color: "#F67280", top: 200, left: 150 },
        { name: "candy-cane", color: "#C06C84", top: 300, left: 250 },
        { name: "candy-cane", color: "#FFD700", top: 150, left: 250 },
        { name: "candy-cane", color: "#98FB98", top: 250, left: 50 },
        { name: "candy-cane", color: "#FFA07A", top: 350, left: 150 },
        { name: "candy-cane", color: "#F8B195", top: 400, left: 250 },
        { name: "candy-cane", color: "#F67280", top: 500, left: 100 },
        { name: "candy-cane", color: "#C06C84", top: 600, left: 200 },
        { name: "candy-cane", color: "#FFD700", top: 700, left: 300 },
    ];

    const renderCandyIcons = () => {
        return candyIcons.map((candy, index) => {
            return (
                <FontAwesome5
                    key={index}
                    name={candy.name}
                    size={50} // Fixed size for all candy icons
                    color={candy.color}
                    style={{
                        position: "absolute",
                        top: candy.top,
                        left: candy.left,
                        opacity: 0.3,
                    }}
                />
            );
        });
    };

    const navigation = useNavigation();

    const goToNewHomeScreen = () => {
        navigation.navigate("Main", { screen: "Home" });
    };


    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={["#ADD8E6", "#006994"]}
                style={styles.background}
            />
            {renderCandyIcons()}
            <BlurView intensity={100} style={styles.textBox}>
                <Text style={[styles.title, styles.popText]}>WELCOME TO MY CANDY SHOP</Text>
                <Text style={[styles.subtitle, styles.popText]}>
                    Sign In with{" "}
                    <Text style={{ color: "#4285F4" }}>
                        G<Text style={{ color: "#EA4336" }}>o</Text>
                        <Text style={{ color: "#FBBC04" }}>o</Text>
                        <Text style={{ color: "#4285F4" }}>g</Text>
                        <Text style={{ color: "#34A853" }}>l</Text>
                        <Text style={{ color: "#EA4336" }}>e</Text>
                    </Text>
                </Text>
                <Text style={[styles.subtitle, styles.popText]}>And Firebase</Text>
            </BlurView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => promptAsync()}
            >
                <Ionicons name="logo-google" size={24} color="white" />
                <Text style={styles.buttonText}>Sign In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.shopNowButton} onPress={goToNewHomeScreen}>
                <Text style={styles.shopNowButtonText}>Shop Now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    textBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        color: "white",
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginBottom: 10,
    },
    popText: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#4285F4",
        width: "90%",
        padding: 15,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
        marginLeft: 10,
    },
    shopNowButton: {
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: "#007BFF",
        borderRadius: 8,
    },
    shopNowButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
    },
});