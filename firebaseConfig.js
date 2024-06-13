// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo58LIItyK932wq85pMLV2ZRIa4zmb_rQ",
    authDomain: "mycandyshp.firebaseapp.com",
    projectId: "mycandyshp",
    storageBucket: "mycandyshp.appspot.com",
    messagingSenderId: "446847373016",
    appId: "1:446847373016:web:ec4a34438a8e49ed0711ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


// ios: 105321342579-37euv1qpmvoerl9k8tl02ikloulv98t5.apps.googleusercontent.com
// android: 105321342579-2bh8sg4mtr68m640vu5h7btm5j9gqn8u.apps.googleusercontent.com