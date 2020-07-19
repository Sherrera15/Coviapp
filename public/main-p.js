//Cerrar sesión
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
      e.preventDefault();
      auth.signOut().then(() => {
            Swal.fire({
              title: "Su sesión finalizó",
              icon: "success"
          });
      });
});

//Guardar en localStorage

var ident = [],
    names = [],
    lastnames = [],
    emails = [],
    phones = [],
    addresse = [],
    photos = [],
    messages = [];

    //Verificar que contenga información en el localStorage

    if(localStorage.getItem('ID') != null){
      ident = JSON.parse(localStorage.getItem('ID'));
      names = JSON.parse(localStorage.getItem('name'));
      lastnames = JSON.parse(localStorage.getItem('lastname'));
      emails = JSON.parse(localStorage.getItem('email'));
      phones = JSON.parse(localStorage.getItem('phone'));
      addresse = JSON.parse(localStorage.getItem('address'));
      photos = JSON.parse(localStorage.getItem('photo'));
      messages = JSON.parse(localStorage.getItem('message'));
    }

var elementBotonAgregar = document.querySelector('#saveBtn');

elementBotonAgregar.addEventListener('click', aggPatients );

var selectedRow = null;

function reset(){
  document.getElementById("identification").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("photo").value = "";
  document.getElementById("message").value = "";
    selectedRow = null;

}

function aggPatients(){
  var identification = document.querySelector('#identification').value,
  name = document.querySelector('#name').value,
  lastname = document.querySelector('#lastname').value,
  email = document.querySelector('#email').value
  phone = document.querySelector('#phone').value,
  address = document.querySelector('#address').value,
  photo = document.querySelector('#photo').value,
  message = document.querySelector('#message').value;

  ident.push(identification);
  names.push(name);
  lastnames.push(lastname);
  emails.push(email);
  phones.push(phone);
  addresse.push(address);
  photos.push(photo);
  messages.push(message);

  localStorage.setItem('ID', JSON.stringify(ident));
  localStorage.setItem('name', JSON.stringify(names));
  localStorage.setItem('lastname', JSON.stringify(lastnames));
  localStorage.setItem('email', JSON.stringify(emails));
  localStorage.setItem('phone', JSON.stringify(phones));
  localStorage.setItem('address', JSON.stringify(addresse));
  localStorage.setItem('photo', JSON.stringify(photos));
  localStorage.setItem('message', JSON.stringify(messages));

  fillTable();


}
