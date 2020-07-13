//Cerrar sesión
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
      e.preventDefault();
      auth.signOut().then(() => {
            Swal.fire({
              title: "Su sesión finalizó",
              icon: "success"
            });
