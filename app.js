import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";


const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')



form.addEventListener('submit', (e) => {
    e.preventDefault()

    // console.log(email.value);
    // console.log(password.value);

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'home.html'
            email.value = ''
            password.value = ''
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('bhai ap ka masla a rha h');
            alert('Please enter your email and password')
        });
})
