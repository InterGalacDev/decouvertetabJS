const personnes = [
    {id:1,nom:'Dupond',prenom:'Jean',age:44},
    {id:2,nom:'Voisin',prenom:'Clément',age:20},
    {id:3,nom:'Parisot',prenom:'Pierre',age:20},
    {id:4,nom:'Sonnet',prenom:'Thomas',age:21},
    {id:5,nom:'Chanot',prenom:'Alexandre',age:38}
]
for (let personne of personnes) {
    console.log(personne);
}

function afficher(personne){
    console.log(personne);
}
personnes.forEach(afficher);
personnes.forEach(personne => console.log(personne));

const personnes2 =[]
for(let personne of personnes){
    personnes2.push(personne.prenom+' '+personne.nom.toUpperCase());
}
console.log(personnes2);

// cree un tableau qui contient tout les personnes dont l age est superieur a 40 ans :

const personnes4 = personnes.filter(personnes => personnes.age > 20);
console.log(personnes4);

const personnes5 = personnes
.filter(personnes => personnes.age >20 )
.map(personne => personne.prenom + ' ' + personne.nom.toUpperCase());
console.log(personnes5)