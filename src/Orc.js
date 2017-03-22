class Orc extends Personnage {



	canibaler(personnage) {
		if (personnage instanceof Guerrier) {
			personnage.degat += 2;
			this.experience += 1;
		} else {
			throw 'Un orc ne peut manger que de la chaire guerriere'
		}
	}




}