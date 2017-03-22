class Elf {


	attaqueFleche(tabPersonnage) {

		tabPersonnage.forEach(function (perso) {
			perso.degat -= 1;
		});

	}


}