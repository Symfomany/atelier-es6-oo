import {Personnage} from '../src/Personnage.js';
/**
 * Just test creation of Personnage
 */

describe('Personnage', () => {
   it('should pseudo of Personnage', () => {
       let gandalf = new Personnage('Gandalf');
       expect(gandalf.pseudo).toBe('gandalf');
   });
});