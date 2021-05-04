let a = 10 // Je déclare une variable en meme temps que je l assimile
console.log(a);

const tab= [10,20,77,55]; // je declare le tableau
console.log(tab);

for(let nombre of tab) {
    console.log(nombre);
}

// on ajoute avec push un nombre dans le tableau et apres j affiche le tableau
tab.push(100);
console.log(tab);

// on cree un 2e tableau en glissant ce qu'il y a dans le premier tableau
const tab2 = tab;
tab2.push(500);
console.log(tab);
console.log(tab2);