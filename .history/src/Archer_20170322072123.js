class Archer extends Personnage {



	attaqueFleche(tabPersonnage) {

		tabPersonnage.forEach(function (perso) {
			perso.degat -= 1;
		});

	}
}