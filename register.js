import { createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";


const form = document.querySelector('#form')
const email = document.querySelector('#email')
const name = document.querySelector('#name')
const img = document.querySelector('#img')
const password = document.querySelector('#password')




form.addEventListener('submit', (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    email.value = '';
    password.value = '';
    // confirmPass.value = ''
    window.location = 'index.html';



    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert('Please enter your email and password')
    // ..
  });

})