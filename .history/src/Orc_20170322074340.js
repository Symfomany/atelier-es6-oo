class Orc extends Personnage {



	canibaler(personnage) {
		if (personnage instanceof Guerrier) {
			personnage.degat += 2;
		}
		this.experience += 1;
	}




}