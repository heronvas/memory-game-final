var firebaseConfig = {
    apiKey: "AIzaSyAwv9W0rhdWPl5RxRJLSvUTa2Mczt31zf8",
    authDomain: "register-5d2dc.firebaseapp.com",
    databaseURL: "https://register-5d2dc.firebaseio.com",
    projectId: "register-5d2dc",
    storageBucket: "register-5d2dc.appspot.com",
    messagingSenderId: "96588430685",
    appId: "1:96588430685:web:518cbff58205dc490e3cb4",
    measurementId: "G-FQTTHNJ50R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//var start = document.getElementById('start').addEventListener('start', start_game);
function start_game() {
	return window.location='card.html';
}
function start_leaderboard() {
	return window.location='leaderboard.html';

}



function signout(){
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
        // User is signed in.
firebase.auth().signOut().then(function() {
  // Sign-out successful.

console.log('User Logged Out!');
return window.location = "index.html";
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
    }});
    
}