// Registro
//
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

          Swal.fire({
            title: "Ingreso éxitoso",
            icon: "success"
          })

          window.location.href = 'page.html';

          console.log('Ok')
        })

})

auth.onAuthStateChanged(user =>{
  if(user){
    alert("Inició sesión un usuario.");
  }
  else{
    alert('No hay usuarios conectados!');
  }
})
