import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./firebase.mjs";


var usenam = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var creat = document.getElementById("create")
var log = document.getElementById("log")
var forget = document.getElementById("forget")


creat.addEventListener("click", function(){
    createUserWithEmailAndPassword(auth, email.value, password.value, usenam.value0)
   .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    sendEmailVerification(auth.currentUser)
    .then(() => {
      alert("done")
    // Email verification sent!
    // ...
  });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    
    // ..
  });
})
    

log.addEventListener("click", function(){
    
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {

    // Signed in 
    const user = userCredential.user;
   if(user.emailVerified){
    window.location.href = "../src/dashboard.html"
    alert("workd")
   }else{
    alert("not work")
   }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    
  });
})

forget.addEventListener("click", function(){

    sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

})

