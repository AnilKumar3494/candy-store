import React from 'react';
// export { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importing screens
import NewHomeScreen from './screens/NewHomeScreen';
import Profile from './screens/Profile';
import Cart from './screens/Cart';
import EditProfile from './screens/EditProfile';
import TestScreen from './screens/TestScreen';

// Screen Names
const homeName = 'Home';
const profileName = 'Profile';
const cartName = 'Cart';
const editProfileName = 'EditProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case homeName:
                        iconName = focused ? 'home' : 'home-outline';
                        break;
                    case cartName:
                        iconName = focused ? 'cart' : 'cart-outline';
                        break;
                    case profileName:
                        iconName = focused ? 'person' : 'person-outline';
                        break;
                    default:
                        iconName = 'create-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { paddingBottom: 5, fontSize: 10 }
        })}
    >
        <Tab.Screen name={homeName} component={NewHomeScreen} />
        <Tab.Screen name={profileName} component={Profile} />
        <Tab.Screen name={cartName} component={Cart} />
        <Tab.Screen name={editProfileName} component={EditProfile} />
    </Tab.Navigator>
);

const MainContainer = () => {
    return (
        // This is where all the navigation happnes
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="TestScreen" component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;
