import firebase from "firebase/app";
import 'firebase/database';

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

// FIREBASE'de DİZİLER ile çalışmak-1 :

//Aşağıdaki yöntemlerle veritabanına dizi eklenebilir. Fakat böyle eklediğimizde veritabanı dizi elamanlarına kendisi ID atayarak sıfırdan başlayarak kendi sıralıyor.
// const blogs = [
//     {
//         id: "1",
//         title: "blog title 1"
//     },
//     {
//         id: "2",
//         title: "blog title 2"
//     },    
//     {
//         id: "3",
//         title: "blog title 3"
//     }
// ];

// const users =[
//     {
//         id: 1,
//         name: "Sencer Alp"
//     },
//     {
//         id: 2,
//         name: "İbrahim"
//     },
    
// ]

// database.ref().set({
//     blogs: blogs,
//     users: users
// });


// Aşağıdaki şekilde her bir elaman bizim belirlediğimiz ID'ler ile veritabanına gönderilir.
const blogs = {
    101: {
        id: "1",
        title: "blog title 1"
    },
    102: {
        id: "2",
        title: "blog title 2"
    }
};

const users = {
    "senceralp": {
        name: "Sencer Alp",
        surname: "Doğdu"
    },
    "ibrahim": {
        name: "İbrahim",
        surname: "Doğdu"
    }
}

// database.ref().set({
//     blogs,
//     users
// });

// Veritabanından yukarıda gönderdiğimiz bilgileri once() metodu ile çekelim:
database.ref().once("value").then((snapshot) => {
    console.log(snapshot.val());
});

database.ref("blogs/101").once("value").then((snapshot) => {
    console.log(snapshot.val());
});

database.ref("users").once("value").then((snapshot) => {
    console.log(snapshot.val());
});


// Veritabanındaki diziye yeni bir alaman eklemek:
// database.ref("blogs").push({
//     id: "3",
//     title: "blog title 3"
// });

// Dizi içerisinde güncelleme (set ya da update)
database.ref("blogs/-NCPGCMAgg3XwmaSuTGh").set({
    id: "4",
    title: "blog title 4"
})

// Olmayan bir node üzerinde konumlanarak yeni bir object tanımlaması yapabiliriz ve o node oluşur:
database.ref("products").push({
    name: "Samsung S5",
    price: 3000,
    isApproved: false
})

database.ref("products").push({
    name: "Samsung S7",
    price: 4000,
    isApproved: true
})

database.ref("products").push({
    name: "Samsung S8",
    price: 5000,
    isApproved: true
})