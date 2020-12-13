var nam, id;
function reg_modal(){
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='block';
}
document
  .getElementById('RegForm1')
  .addEventListener('submit', formSubmit);
document
  .getElementById('Log')
  .addEventListener('submit', login_submit);
var modal = document.getElementById('id01');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


function logcheck() {
  document.getElementById('id01').style.display='block';
  c = unescape(document.cookie);
  if(c.length != 0){
  console.log(c);
  l = c.split(";");
  console.log(l);
  e = document.getElementById('email');
  em = l[0].split('=')[1];
  p = document.getElementById('psw');
  pass = l[1].split('=')[1];
  console.log(pass);
  p.value = pass;
  e.value = em;
  console.log(em);}



}

/*function valid_reg() {
        var name = document.forms["RegForm"]["username"];
        var email = document.forms["RegForm"]["email"];
        var password = document.forms["RegForm"]["psw"];
        var cnf = document.forms["RegForm"]["psw_repeat"];
        var letters = /^[A-Za-z]+$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var c = 0;
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            c = 1;
            return false;
        }

         if(!(name.value.match(letters))) {
            alert('Username must have alphabet characters only');
            name.focus();
            c = 1;
            return false;
        }

        if (email.value == "") {
            window.alert("Please enter your email.");
            email.focus();
            c = 1;
            return false;
        }

        if(!(email.value.match(mailformat))) {
            alert("You have entered an invalid email address!");
            email.focus();
            c = 1;
            return false;
        }

        if (password.value == "") {
            window.alert("Please enter your password.");
            password.focus();
            c = 1;
            return false;
        }

        if (password.value.length < 8) {
            window.alert("Password size should be 8 minimum.");
            password.focus();
            c = 1;
            return false;
        }

        if (cnf.value != password.value) {
            window.alert("Password should be same.");
            cnf.focus();
            c = 1;
            return false;
        }
        if (c == 0)
        {
          formSubmit();
        }



    }*/

// Initialize Firebase(2)
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
 let formMessage = firebase.database().ref('register');

//Reference for form collection(3)


//listen for submit event//(1)

//Submit form(1.2)
function formSubmit(e) {
  
  e.preventDefault();
  // Get Values from the DOM
  var name = document.forms["RegForm"]["username"];
        var email = document.forms["RegForm"]["email"];
        var password = document.forms["RegForm"]["psw"];
        var cnf = document.forms["RegForm"]["psw_repeat"];
        var letters = /^[A-Za-z]+$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var c = 0;
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            c = 1;
            return false;
        }

         if(!(name.value.match(letters))) {
            alert('Username must have alphabet characters only');
            name.focus();
            c = 1;
            return false;
        }

        if (email.value == "") {
            window.alert("Please enter your email.");
            email.focus();
            c = 1;
            return false;
        }

        if(!(email.value.match(mailformat))) {
            alert("You have entered an invalid email address!");
            email.focus();
            c = 1;
            return false;
        }

        if (password.value == "") {
            window.alert("Please enter your password.");
            password.focus();
            c = 1;
            return false;
        }

        if (password.value.length < 8) {
            window.alert("Password size should be 8 minimum.");
            password.focus();
            c = 1;
            return false;
        }

        if (cnf.value != password.value) {
            window.alert("Password should be same.");
            cnf.focus();
            c = 1;
            return false;
        }
  if (c == 0)
  {
 
  var score = 0;
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then(function(user) {
    
   

// ------------------------------------//
    var userId;
   //Check if signed in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        userId = String(user.uid);
        console.log(userId);
        sendMessage(userId, name.value, score);
    }});
    
    return window.location = 'index.html';
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
    window.location.reload(true);

    // ..
  });
}
}

//Send Message to Firebase(4)

function sendMessage(userId,name, score) {
  const formMessage1 = formMessage.child(userId);
  
  formMessage1.set({
    name: name,
    score: score
  });
  window.alert("register");
}

/*function valid_log() {

        var email = document.forms["Logpage"]["email"];
        var password = document.forms["Logpage"]["psw"];
        var c = 0;

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (email.value == "") {
            window.alert("Please enter your email.");
            email.focus();
            c = 1;
            return false;
        }

        if(!(email.value.match(mailformat))) {
            alert("You have entered an invalid email address!");
            email.focus();
            c = 1;
            return false;
        }

        if (password.value == "") {
            window.alert("Please enter your password.");
            password.focus();
            c = 1;
            return false;
        }

        if (password.value.length < 8) {
            window.alert("Password size should be 8 minimum.");
            password.focus();
            c = 1;
            return false;

        }
        if (c == 0){
          login_submit();
        }
    }*/

    
  //var user1 = firebase.auth().currentUser;
//console.log(user1.uid);
//id = user1.uid;
//localStorage.setItem("userID", id);

function reset() {
  var auth = firebase.auth();
  var email = document.forms["Logpage"]["email"];
  var c = 0;

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value == "") {
            window.alert("Please enter your email.");
            email.focus();
            c = 1;
            return false;
        }

        if(!(email.value.match(mailformat))) {
            alert("You have entered an invalid email address!");
            email.focus();
            c = 1;
            return false;
        }
if(c == 0){
auth.sendPasswordResetEmail(email.value).then(function() {
  // Email sent.
  window.alert("Check your mail")
}).catch(function(error) {
  // An error happened.
});}
}


function login_submit(e){
  e.preventDefault();
  var email = document.forms["Logpage"]["email"];
        var password = document.forms["Logpage"]["psw"];
        var c = 0;

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (email.value == "") {
            window.alert("Please enter your email.");
            email.focus();
            c = 1;
            return false;
        }

        if(!(email.value.match(mailformat))) {
            alert("You have entered an invalid email address!");
            email.focus();
            c = 1;
            return false;
        }

        if (password.value == "") {
            window.alert("Please enter your password.");
            password.focus();
            c = 1;
            return false;
        }

        if (password.value.length < 8) {
            window.alert("Password size should be 8 minimum.");
            password.focus();
            c = 1;
            return false;

        }
  if (c == 0){
        
        
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then(function(user){

     var check = document.getElementById("log_rem").checked;
console.log(check);
if(check){
    console.log("cookie");
    var email = document.forms["Logpage"]["email"];  
    var password = document.forms["Logpage"]["psw"];
    document.cookie = 'email=' + email.value;
    document.cookie = "password="+psw.value;
    
}
c = unescape(document.cookie);
console.log(c);

    window.alert("Login successfully");// Signed in
    return window.location="menu.html"
    // Signed in
    // ...
  })
  .catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
    window.location.reload(true);
  });

}
}


function signout(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('User Logged Out!');
  return window.location = "index.html";
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}