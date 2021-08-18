function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
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

let pvm = "2021/08/18"
console.log 

/*
monen
rivin
kommennti
*/
