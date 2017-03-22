/**
 * @class Personnage
 */
class Personnage {

	/**
	 * Construct personnage
	 */
	constructor(pseudo, force = 0, experience = 0) {

		// throw exception...
		if (isNaN(force)) {
			throw 'La force doit être un nombre'; // stop le processus
		}

		this.pseudo = pseudo;
		this.force = force;
		this.experience = experience;

		this.degat = 0;
		this._ville = 'Lyon'; // on pourra y accéder avec getter / setter
	}


	sePresenter() {
		return `Je suis ${this.pseudo} venant dans la comptée  de ${this.ville}`;
	}


	frapper(personnage) {
		this.experience += 1;
		personnage.degat += 1;
	}

	changerVille(autreVille) {
		this.ville = autreVille;
	}

	evoluer() {

	}



	/**
	 *  Getter: permet de renvoyer une fonction derriere un attribut
	 * Modifie la sortie d'un attribut
	 */
	get ville() {
		return `
					La jolie comptée de ${this.pseudo} se situe à ${this._ville}
				`;
	}

	get etat() {
		return `
					${this.pseudo} a   ${this.degat} point d'experience 7
					avec la force ${this.force} 
					${this.pseudo} est endommagé à ${this.degat} point 
				`;
	}


	/**
	 * Setter
	 */
	set ville(ville) {
		if (['Lyon', 'Paris', 'Marseille'].indexOf(ville) === -1) {
			throw 'La compté n\'est pas authorisée';
		}

		this._ville = ville;
	}

	/**
	 * écriture de la méthode toString() pour convertir un objet en chaine de caractères
	 */
	toString() {
		return `
				Je suis ${this.pseudo} du Seigneur des Anneaux
				`
	}

	/**
	 *  Une méthode statique est appelé sans avoir beoind e créer un objet
	 *  Cette méthode n'est donc pas dépendant de l'objet  qui l'utilise
	 * Je ne peux donc pas utilisé le mot-clef this dans une méthode static
	 */
	static jouerDansFilm() {

		return `Tous les personnages ont joué dans le Seigneur des Anneaux`;
	}


}