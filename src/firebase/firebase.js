import * as firebase from "firebase";

// const config = {
//     apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//     authDomain: "expense-manager-react.firebaseapp.com",
//     databaseURL: "https://expense-manager-react.firebaseio.com",
//     projectId: "expense-manager-react",
//     storageBucket: "expense-manager-react.appspot.com",
//     messagingSenderId: "847044394910"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj7hgPXfNMJT_3F5nTBqfb0I5HEsPfPIs",
    authDomain: "expense-manager-2306.firebaseapp.com",
    databaseURL: "https://expense-manager-2306-default-rtdb.firebaseio.com",
    projectId: "expense-manager-2306",
    storageBucket: "expense-manager-2306.appspot.com",
    messagingSenderId: "753863428892",
    appId: "1:753863428892:web:18d6c06e3748d32b04c8d9",
    measurementId: "G-ZRB3SD411R"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };
