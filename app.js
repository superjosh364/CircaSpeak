(function () {
	// Initialize Firebase
    var config = {
        apiKey: "AIzaSyD85RBDL9lINYaJpngIUFjEb5IgAh0s7g4",
        authDomain: "circaspeak.firebaseapp.com",
        databaseURL: "https://circaspeak.firebaseio.com",
        storageBucket: "circaspeak.appspot.com",
        messagingSenderId: "809714208139"
    };
    firebase.initializeApp(config);
}());
var auth = firebase.auth();
var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var go = document.getElementById("go");
var preObject = document.getElementById('object');
var dbRefObject =firebase.database().ref().child('object');
var btnLogout = document.getElementById('btnLogout');

// sync object changes
dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val())
});

if(btnLogout) {
    btnLogout.addEventListener('click', e => {
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
        console.log('user signed out');
        window.location.href = "https://circaspeak.firebaseapp.com";
}).catch(function(error) {
  // An error happened.
        console.log(error);
});
});
}
if(go) {
    go.addEventListener('click', e => {
    var email = txtEmail.value;
    var password = txtPassword.value;
    var auth = firebase.auth();
    //sign in
    var promise = auth.signInWithEmailAndPassword(email, password).then(function() {
        console.log('user signed in');
        window.location.href = "https://circaspeak.firebaseapp.com/home.html";
    };
    promise.catch(e => console.log(e.message));
)})};

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    }
    else {
            console.log("not logged in");
    }
});
