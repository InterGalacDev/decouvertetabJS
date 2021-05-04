const dupont = {
    nom : 'Dupond',
    prenom : 'Jean',
    age : 45
}
console.log(dupont);
const dupont_copie = {...dupont,age:55,sexe:'M'}
dupont_copie.age = 55;
console.log(dupont);
console.log(dupont_copie);
const{nom:n,prenom:p,age:a}=dupont;
console.log(n);