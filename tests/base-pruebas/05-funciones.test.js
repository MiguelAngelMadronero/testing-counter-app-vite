import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => { 

    test('getUser debe de retornar un objeto', () => { 

        const testUser={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user= getUser();
        
        expect(testUser).toEqual(user);// esto es para comparar si los objetos son iguales
    

     });

    test('getUsuarioActivo debe de retornar un objeto ', () => { 

        const name='Miguel Angel';

        const testUser2 = {
            uid: 'ABC567',
            username: name
        };

        const user2= getUsuarioActivo(name);

        expect(testUser2).toEqual(user2);


        

       
     })
 });