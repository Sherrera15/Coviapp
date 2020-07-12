const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() =>{
    Swal.fire({
      title: "Su sesión finalizó",
      icon: "success"
    })

    window.location.href = 'index.html';
    console.log('Listo!')
  })
})

window.onload = function() {

}

function getCovidData(){
  fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
  .then(function(resp){return resp.json})
  .then(function(data){
    console.log(data);
  //   let country = data.location.countryregion;
  //   let province = data.location.provincestate;
  //   let update = data.location.lastupdate;
  //   let confirmedCases = data.location.confirmed;
  //   let death = data.location.deaths;
  //   let recoved = data.location.recovered;
  //
  //   document.getElementById('provinces').innerHTML = province.toLocaleString('en');
  //   document.getElementById('country').innerHTML = country.toLocaleString('en');
  //   document.getElementById('update').innerHTML = update.toLocaleString('en');
  //   document.getElementById('confirmed').innerHTML = confirmedCases.toLocaleString('en');
  //   document.getElementById('deaths').innerHTML = death.toLocaleString('en');
  //   document.getElementById('recovered').innerHTML = recoved.toLocaleString('en');
  //
})
  .catch(function(){
    console.log("error");
  })
}
