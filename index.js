const express = require('express');
const cors = require('cors');
const firebase = require('firebase');
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('public'))

app.get('/resume', (req, res) => {

    var firebaseConfig = {
        apiKey: "AIzaSyA_Uh9sk-bsskdlWryUqXxEEPKxcvQ9ZzA",
        authDomain: "resume-30e0a.firebaseapp.com",
        projectId: "resume-30e0a",
        storageBucket: "resume-30e0a.appspot.com",
        messagingSenderId: "404562103091",
        appId: "1:404562103091:web:289631f1154b83cf180c46"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    firebase.database().ref('resume').once('value', (snap) => {
        res.json(snap.val());
    });
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});