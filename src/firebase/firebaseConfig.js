import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcZIL9aToET7zke0QrC_8WpkCyIzlUhGg",
    authDomain: "react-blog-app-15b1f.firebaseapp.com",
    databaseURL: "https://react-blog-app-15b1f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-blog-app-15b1f",
    storageBucket: "react-blog-app-15b1f.appspot.com",
    messagingSenderId: "253977059139",
    appId: "1:253977059139:web:bb5ad03a9651d4bb9819f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    title: "blog title 1",
    description: "blog description 1",
    author: {
        name: "Sencer Alp",
        surname: "Doğdu"
    }
})