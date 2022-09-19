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

//ref() ile firebase'deki ana dizini yani root'u seçeriz.
// database.ref().set({
//     title: "blog title 1",
//     description: "blog description 1",
//     author: {
//         name: "Sencer Alp",
//         surname: "Doğdu"
//     }
// });

// Bu şekilde root'a gönderdğimiz için önceki gönderdiğimiz bilgiler silinir yerine buradaki string ifade yazılır:
// database.ref().set("yeni kayıt"); 

// Bu şekilde de root'a gönderdğimiz için önceki gönderdiğimiz bilgiler silinir yerine buradaki object ifade yazılır:
// database.ref().set({
//     title: "blog title 11111"
// })

// Bunu çalıştırdığımızda ise varıolan kayıt üzerinde değişiklik yapmış oluruz:
// database.ref("title").set("updated blog title 1");
// database.ref("description").set("updated blog description 1");
// database.ref("author").set({
//     name: "İbrahim",
//     surname: "Doğdu"
// });

// Bunu çalıştırdğımızda direkt olarak objenin içerisindeki elamanı değiştirebiliriz:
// database.ref("author/name").set("İbrahim");

// Yeni bir kayıt eklemek için:
// database.ref("tags").set(["javascript", "reactJS", "nodeJS"])

//set metodu promise geriye döndürür.
database.ref().set({
    title: "blog title",
    description: "blog description",
    author: {
        name: "Sencer Alp",
        surname: "Doğdu"
    }
}).then(() => {
    console.log("Kayıt eklendi");
    database.ref("tags")
        .set(["react", "javascript"])
        .then(() => {
            console.log("Etiketler eklendi");
        }).catch((e) => {
            console.log("Hata", e);
        })
})
.catch((e) => {
    console.log("Hata", e);
});


