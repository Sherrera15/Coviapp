//Registro

// const loginForm = document.querySelector('#login-form');
//
// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//
//   const email = document.querySelector('#email').value;
//   const password = document.querySelector('#password').value;
//
//   auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(userCredential =>{
//         //Clear form.
//         loginForm.reset();
//
//         console.log('Ok')
//       })
// })

//login
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential =>{
          //Clear form.
          loginForm.reset();

          console.log('Ok')
        })

})
