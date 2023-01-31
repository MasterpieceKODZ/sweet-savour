// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD2aTUry4YcCud4JEFgV5NHuqXigiP9M-M",
	authDomain: "sweet-savour.firebaseapp.com",
	projectId: "sweet-savour",
	storageBucket: "sweet-savour.appspot.com",
	messagingSenderId: "1056146864926",
	appId: "1:1056146864926:web:84317532c18ff144f8270f",
	measurementId: "G-V1TR9Q2LD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
