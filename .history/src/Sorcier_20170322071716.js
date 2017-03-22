class Sorcier extends Personnage {


	constructor(pseudo, force = 0, experience = 0) {


		this.pseudo = pseudo;
		this.force = 5;
		this.mana = 10;
		this.degat = 0;
		this._ville = 'Paris';
	}


	ensorceler(personnage) {
		personnage.degat -= 5;
		this.mana -= 2;
	}


}