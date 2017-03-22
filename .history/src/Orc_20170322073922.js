class Orc extends Personnage {




	canibaler() {
		if (this.mana > 0) {
			personnage.degat -= 5;
			this.mana -= 2;
		}
	}




}