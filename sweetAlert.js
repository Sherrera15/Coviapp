function validation(){
  var email, password;
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  if (email === "" || password === "") {
    Swal.fire({
      title: "Los campos están vacíos.",
      icon: "warning"
    })
    return false;
  }
}
