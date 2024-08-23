import { getAuth,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./firebase.mjs";


var out = document.getElementById("out")

out.addEventListener("click", function(){
    signOut(auth).then(()=>{
        window.location.href = "../index.html"
    }).catch((error)=>{
  
    })
  })

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      
      window.location.href = "../index.html"

    }
  });