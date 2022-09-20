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

// FIREBASE'de DİZİLER ile çalışmak-2 :


// database.ref("products").push({
//     name: "Samsung S5",
//     price: 3000,
//     isApproved: false
// });

// database.ref("products").push({
//     name: "Samsung S7",
//     price: 4000,
//     isApproved: true
// });

// database.ref("products").push({
//     name: "Samsung S8",
//     price: 5000,
//     isApproved: true
// });


// Veritabanındaki dizi üzerindeki tüm elamanlara döngü yoluyla ulaşmak: 

//once ile
// database.ref("products").once("value")
//     .then((snapshot) => {
//         const products = [];

//         snapshot.forEach(product => {
//             products.push({
//                 id: product.key,
//                 ...product.val()
//             })
//         });
//         console.log(products);
// });

// on ile
// database.ref("products").on("value", (snapshot) => {
//     const products = [];
//     snapshot.forEach((product) => {
//         products.push({
//             id: product.key,
//             ...product.val()
//         })
//     });
//     console.log(products);
// });


// NOT:
// snapshot: Event gerçekleştiğinde, hangi liste ya da object elamanı üzerinde gerçekleşmiş ise o elamanın bilgisini taşır.
// snapshot.key: İlgili liste ya da object elamanının key değerini barındırır.
// snapshot.val(): İlgili liste ya da object elamanının value değerini barındırır.


// Firebase'deki "value" dışındaki diğer event'lara göz atalım:

// "child_removed": Listeden bir elaman silindiğinde silinen elaman bilgisi snapshot içerisinde gelir:
database.ref("products").on("child_removed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// "child_changed": Listedeki bir elaman üzerinde değişiklik olduğunda o elaman bilgisi snapshot içerisinde gelir:
database.ref("products").on("child_changed", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// "child_added": Listeye bir elaman eklendiğinde o elaman bilgisi snapshot içerisinde gelir:
// Not: "child_added" event'i çalıştığında listede önceden var olan bilgiler de snapshot içerisinde geliyor.
database.ref("products").on("child_added", (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});