class Orc extends Personnage {



	canibaler(personnage) {
		personnage.degat -= 5;
		this.mana -= 2;
	}




}