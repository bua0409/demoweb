const config = {
    url:" http://127.0.0.1:5500/assets/login/register.html",
    handleCodeInApp: true,
}
let email = document.getElementById('email')
let password = document.getElementById('password')
const createNewAccount1 = (email,password) => {
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
};
const SingIn = (email,password) => {
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });}