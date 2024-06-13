import * as React from 'react';
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
import SignInScreen from './screens/SignInScreen';

// Screen Names
const homeName = 'Home';
const profileName = 'Profile';
const cartName = 'Cart';
const editProfileName = 'EditProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//google
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {
    GoogleAuthProvider,
    signInWithCredential,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

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
    const [userInfo, setUserInfo] = React.useState();

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '105321342579-37euv1qpmvoerl9k8tl02ikloulv98t5.apps.googleusercontent.com',
        androidClientId: '105321342579-2bh8sg4mtr68m640vu5h7btm5j9gqn8u.apps.googleusercontent.com'
    });

    React.useEffect(() => {
        if (response?.type == "success") {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response]);

    const StackNavigator = () => (
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} initialParams={{ promptAsync: promptAsync }} />
            <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

    return (
        <NavigationContainer>
            <StackNavigator promptAsync={promptAsync} />
        </NavigationContainer>
    );
};

export default MainContainer;