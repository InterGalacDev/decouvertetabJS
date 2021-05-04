//function addition(a,b) {
//    return a+b;
//}
//console.log(addition(2,3));
//----------------------------------
//const addition2 = function(a,b){
 //   return a+b;
//}
//console.log(addition2(2,3))
//----------------------------------
//const addition3 =(a,b) => {
 //   return a+b;
//}
//console.log(addition3(1,3))
//---------------------------------
//const addition4 =(a,b) => a+b;
//console.log(addition4(1,3))
//---------------------------------

// Je fais un tableau et je cree une fonction additionnant les nombres de ce tableau avec un FOR
const tab= [10,20,30,40,60];
const calculerSomme = (...nombres) =>{
    let somme = 0;
    for(let nombre of nombres){
        somme+=nombre;
    }
    return somme;
}
console.log(calculerSomme(tab));

// -------------------------
const nombres = [10,20,44,12];
console.log(nombres);
console.log(...nombres);