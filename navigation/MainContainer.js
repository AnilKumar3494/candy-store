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
        // This is where all the navigation happnes --------- @Naishal

        // try this link - https://snack.expo.io/?platform=android&name=Nesting%20navigators%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%406.3.1%2C%40react-navigation%2Fdrawer%406.4.1%2C%40react-navigation%2Felements%401.3.3%2C%40react-navigation%2Fmaterial-bottom-tabs%406.2.1%2C%40react-navigation%2Fmaterial-top-tabs%406.2.1%2C%40react-navigation%2Fnative-stack%406.6.1%2C%40react-navigation%2Fnative%406.0.10%2C%40react-navigation%2Fstack%406.2.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fnesting-best-practices.js

        //https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator


        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainContainer;
