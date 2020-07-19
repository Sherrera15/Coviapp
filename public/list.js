

fillTable();

 //Llenar tabla o registro
function fillTable(){
  var tbody = document.querySelector('#userList tbody');

  //Que se encuentre limpio.
  tbody.innerHTML = '';

  var ident = JSON.parse(localStorage.getItem('ID')),
      names = JSON.parse(localStorage.getItem('name')),
      lastnames = JSON.parse(localStorage.getItem('lastname')),
      emails = JSON.parse(localStorage.getItem('email')),
      phones = JSON.parse(localStorage.getItem('phone')),
      addrese = JSON.parse(localStorage.getItem('address')),
      photos = JSON.parse(localStorage.getItem('photo')),
      messages = JSON.parse(localStorage.getItem('message'));

  var cant = ident.length;


   //para crear filas
  for(var i = 0; i < cant; i++) {
    var row = document.createElement('tr');

    var celdaID = document.createElement('td'),
    celdaName = document.createElement('td'),
    celdaLastname = document.createElement('td'),
    celdaEmail = document.createElement('td'),
    celdaPhone = document.createElement('td'),
    celdaAddress = document.createElement('td'),
    celdaPhoto = document.createElement('td'),
    celdaMessage = document.createElement('td');


    //Nodos de textos

    var nodoTextID = document.createTextNode(ident[i]),
    nodoTextName = document.createTextNode(names[i]),
    nodoTextLastname = document.createTextNode(lastnames[i]),
    nodoTextEmail = document.createTextNode(emails[i]),
    nodoTextPhone = document.createTextNode(phones[i]),
    nodoTextAddress = document.createTextNode(addresse[i]),
    nodoTextPhoto = document.createTextNode(photos[i]),
     nodoTextMessage = document.createTextNode(messages[i]);

    celdaID.appendChild(nodoTextID);
    celdaName.appendChild(nodoTextName);
    celdaLastname.appendChild(nodoTextLastname);
    celdaEmail.appendChild(nodoTextEmail);
    celdaPhone.appendChild(nodoTextPhone);
    celdaAddress.appendChild(nodoTextAddress);
    celdaPhoto.appendChild(nodoTextPhoto);
    celdaMessage.appendChild(nodoTextMessage);


    row.appendChild(celdaID);
    row.appendChild(celdaName);
    row.appendChild(celdaLastname);
    row.appendChild(celdaEmail);
    row.appendChild(celdaPhone);
    row.appendChild(celdaAddress);
    row.appendChild(celdaPhoto);
     row.appendChild(celdaMessage);

    tbody.appendChild(row);


  }
}
