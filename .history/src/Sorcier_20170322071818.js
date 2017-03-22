class Sorcier extends Personnage {


	constructor(pseudo, force = 0, experience = 0) {

		super(pseudo, 5);

		this.mana = 10;
		this._ville = 'Paris';
	}


	ensorceler(personnage) {
		if (this.mana > 0) {
			personnage.degat -= 5;
			this.mana -= 2;
		}
	}


}