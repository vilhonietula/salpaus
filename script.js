function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}
function pvmfin(vuosi, kk, PV){
  
 
  if (kk==03 || kk==04 || kk==05){
    return "kevät "+PV+"."+kk+"."+vuosi;
} 
  else if(kk==06 || kk==07 || kk==08){
    return "kesä "+PV+"."+kk+"."+vuosi; 
  }
  else if(kk==09 || kk==10 || kk==11){
    return "syksy "+PV+"."+kk+"."+vuosi;
  }
  else{
    return "syksy "+PV+"."+kk+"."+vuosi;
  }
}  
 console.log("täällä ollaan!");


 let ika = 44; // numerot kirjoitetaan ilman lainausmerkkejä
 ika = ika + 1;

 let ikakirjaimina = "44";//string(str)

 ikakirjaimina = ikakirjaimina +1;

console.log(ikakirjaimina) 

console.log("sinun ikäsi on: " + ika);

let juuvaiei = true; //boolean

console.log(juuvaiei);

let nimi = "Vilho Nietula";

console.log(nimi.toUpperCase());

console.log("splittausharjoitus: " + nimi.split(" ")[0]);

//while ja loop:

for(let i=0; i<=10; i++){
  console.log("Loopin iteraatioluku on: " + i);
}

if(ika => 18){
  console.log("onnea, olet täysi-ikäinen!");
}
else if (ika === 18 && nimi == "keijo"){
  console.log("onnea Keijo, oletu juuri ja juuri täysi-ikäinen!");
}
else{
  console.error("kasva vielä vähän...");
}

console.log(laskutehtava(76786276, 982784728));

let pvm = "2021/08/18";
for(let i=1; i<=15; i++){
  
  console.log(i + " " + pvmfin(pvm.split("/")[0],pvm.split("/")[1],pvm.split("/")[2]));
}
/*
monen
rivin
kommennti
*/

//console.log(document:querySelector('#kentta').type);
//console.log(document:querySelector('.lisaanappi').value);

document.querySelector('.lisaanappi').addEventListener('click',e =>{
  e.preventDefault();
  console.log(document.querySelector('#kentta').value);
})
document.querySelector('.ilmoitus').innerHTML = "kentän sisältö on" + document.querySelector('#kentta').value;
settimeout(() =>document.querySelector('.ilmoitus').innerHTML='', 3000);

document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault();
  console.log("nappi toimii!");
  if(document.querySelector('#teht_a').checked){
    alert('tehtävä on merkitty');
  }
  else{
    alert('tehtävä A e ole merkitty');
  }


if(document.querySelector('#teht_b').checked){
  alert('tehtävä B on merkitty')
}
else{
  alert('tehtävä B ei ole merkitty');
}
});