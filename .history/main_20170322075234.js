/**
 * l'ES6 dans touts sa classe
 * http://exploringjs.com/es6/ch_classes.html
 */

/**
 * Création de Personnage
 */
const gandalf = new Personnage('Gandalf');
const legolas = new Personnage('Legolas');
const gimli = new Personnage('Gimli');

console.log(gandalf);
console.log(legolas);
console.log(gimli);
console.log(gandalf.sePresenter());


console.log(typeof gandalf);


/**
 * Changer de Ville
 */
gandalf.changerVille('Marseille');
gimli.changerVille('Marseille');



/**
 * Fight... !! Gandalf est bourré :(
 */
gandalf.frapper(gimli);
gandalf.frapper(legolas);

// Regardons chaque état des personnages après la baston...
console.log(gandalf, gimli);

/**
 * Getter: modifie la sortie d'un attribut en "GET"
 */
console.log(gandalf.etat);
console.log(gandalf.ville);


/**
 * Setter: modifie la modification d'un attribut  "SET"
 * Essayes le cltr + click sous VSCode
 * + Indentation
 * + Autocomplétion
 */
gandalf.ville = 'Paris';
console.log(gandalf.ville);


// toString() convertis un objet en chaine de caractère
console.log(gandalf.toString());

console.log(Personnage.jouerDansFilm());



const sarouman = new Sorcier('sarouman');
sarouman.ensorceler(gandalf);


console.log(sarouman, gandalf);

const azog = new Orc();
const aragorn = new Guerrier('Aragorn');


azog.canibaler(aragorn);
console.log(azog, aragorn);


azog.canibaler(sarouman);
console.log(azog, sarouman);



