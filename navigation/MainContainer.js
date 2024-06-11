import { Text, View } from 'react-native'
import React from 'react'
// export { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Importing screens
import NewHomeScreen from './screens/NewHomeScreen'
import Profile from './screens/Profile'
import Cart from './screens/Cart'
import EditProfile from './screens/EditProfile'
import LoginScreen from './screens/LoginScreen'

// Screen Names
const homeName = 'Home'
const profileName = 'Profile'
const cartName = 'Cart'
const editProfileName = 'EditProfile'
const loginName = 'Login'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={loginName}
            >
                <Stack.Screen name={loginName} component={LoginScreen} />
                <Stack.Screen name={homeName} component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case homeName:
                            iconName = focused? 'home' : 'home-outline';
                            break;
                        case cartName:
                            iconName = focused? 'cart' : 'cart-outline';
                            break;
                        case profileName:
                            iconName = focused? 'person' : 'person-outline';
                            break;
                        default:
                            iconName = 'create-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: { paddingBottom: 5, fontSize: 10 },
                tabBarStyle: {
                    backgroundColor: '#f0f0f0', // Change the background color of the tab bar
                    borderTopWidth: 1, // Add a top border to the tab bar
                    borderTopColor: 'grey', // Change the color of the top border
                },
            })}
        >
            <Tab.Screen
                name={homeName}
                component={NewHomeScreen}
                options={{
                    tabBarLabel: 'Home', // Change the label of the home tab
                    tabBarBadge: 3, // Add a badge to the home tab
                }}
            />
            <Tab.Screen
                name={profileName}
                component={Profile}
                options={{
                    tabBarLabel: 'Profile', // Change the label of the profile tab
                }}
            />
            <Tab.Screen
                name={cartName}
                component={Cart}
                options={{
                    tabBarLabel: 'Cart', // Change the label of the cart tab
                }}
            />
            <Tab.Screen
                name={editProfileName}
                component={EditProfile}
                options={{
                    tabBarLabel: 'Edit Profile', // Change the label of the edit profile tab
                }}
            />
        </Tab.Navigator>
    )
}

export default MainContainer