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

// database.ref().set({
//     title: "blog title",
//     description: "blog description",
//     author: {
//         name: "Sencer Alp",
//         surname: "Doğdu"
//     }
// }).then(() => {
//     console.log("Kayıt eklendi");
// })
// .catch((e) => {
//     console.log("Hata", e);
// });


// Kayıt sorgulama:
// once ile firebase'den veri bir kere okunur ve veritabanı ile bağlantı kopar. Alternatifi olan on metodu ile ise veritabanındaki seçtiğimiz ilgili veri'de oluşacak her değişiklikte bilgi okunur.
// snapshot bilgisi ve val() metodu ile veri okunur.
// once ya da on'dan sonra bize bir promise döndürülüyor.
// "value" bir event bilgisidir.
// database.ref()
//     .once("value")
//     .then((snapshot) => {
//         const data = snapshot.val();
//         console.log("Okunan bilgi:", data);
//     })
//     .catch((e) => {
//         console.log("Okuma hatası", e);
//     })


database.ref().on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});

// Aşağıdaki zamanlamaların sonunda yapılan güncellemeler gerçekleştikçe veritabanı güncellenir.
// setTimeout(() => {
//     database.ref("title").set("updated blog title-I");
// }, 3000);

// setTimeout(() => {
//     database.ref("title").set("updated blog title-II");
// }, 6000);

// setTimeout(() => {
//     database.ref("author").update({name: "İbrahimim"});
// }, 9000);


setTimeout(() => {
    database.ref("title").set("blog title one");
}, 3000);

setTimeout(() => {
    database.ref("title").set("blog title two");
}, 6000);

setTimeout(() => {
    database.ref().off(); // off() metodu ile on() ile gerçekleştirilen bağlantı kopartılır. Veritabanında güncelleme olsa bile on() metodu içerisinde yazdığımız komutlar iptal olur.
}, 6000);

setTimeout(() => {
    database.ref("author").update({name: "İbrahim"}); // Yukarıda bağlantı kopartılsa da veritabanında güncelleme yapılır.
}, 9000);

