//function validateForm()



document.querySelector('.lisaanappi').addEventListener('click',e =>{
  e.preventDefault();
  if(document.querySelector("#nimi").value == "")
{
  alert("täytä kaikki kentät")
}
else{
  alert('teksti lisätty');
}
});

//document.querySelector('.lisaanappi1').addEventListener('click', e =>{
  //e.preventDefault();
  //alert('alempi nappi!!!');
  //})

  document.querySelector('.lisaanappi1').addEventListener('click', e =>{
  e.preventDefault();
  if(document.querySelector('#html').checked){
    alert('HTML: tehtävä on merkitty');
  }
  else{
    alert('HTML: ei merkitty')
  }
   if(document.querySelector('#css').checked){
    alert('CSS: tehtävä on merkitty');
  }
  else{
    alert('CSS: ei merkitty')
  }
   if(document.querySelector('#javascript').checked){
    alert('JavaScript: tehtävä on merkitty');
  }
  else{
    alert('JavaScript: ei merkitty')
  }
   if(document.querySelector('#cicd').checked){
    alert('CI/CD: tehtävä on merkitty');
  }
  else{
    alert('CI/CD: ei merkitty')
  }
  });
