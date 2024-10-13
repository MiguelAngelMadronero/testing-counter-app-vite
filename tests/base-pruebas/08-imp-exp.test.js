import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";



describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un heroe por ID', () => { 

        const id=1;
        const hero= getHeroeById(id);
        
        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' });
     });
    test('getHeroeById debe de retornar undefined si no existe el ID', () => { 

        const id=100;
        const hero= getHeroeById(id);
        
        // console.log(hero)//Si MANDAS UN ID QUE NO EXISTE LA CONSOLA REGRESA UNDEFINED

        //!FORMA #1 PARA EVALUAR SI REGRESA UN UNDEFINED
        // expect(hero).toBe(undefined);
        //! FORMA #2 PARA EVALUAR SI REGRESA NULL, FALSE O UNDEFFINED
        expect(hero).toBeFalsy();

     });

     // Tarea
     // Debe de retornar un arreglo con los héroes de DC
     // Length === 3
     // toEqual al arreglo filtrado

     // Debe de retornar un arreglo con los héroes de Marvel
     // Length === 2

    test('getHeroesByOwner debe de retornar un arreglo de DC', () => { 

        const owner='DC'
        const heroes=getHeroesByOwner(owner);

        const dataHeroes = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
            
        ];
        console.log(getHeroesByOwner(owner))

        expect(heroes).toEqual(dataHeroes);
        expect(heroes.length).toBe(3);//para comparar primitivos
     });

    test('getHeroesByOwner debe de retornar un arreglo de Marvel', () => { 

        const owner='Marvel'
        const heroes=getHeroesByOwner(owner);

        const dataHeroes = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ];

        expect(heroes).toEqual(dataHeroes);
        expect(heroes.length).toBe(2);

    })
 })

