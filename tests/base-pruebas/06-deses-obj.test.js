import { usContext } from "../../src/base-pruebas/06-deses-obj"



describe('Pruebas en 06-deses-obj', () => { 

    test(' usContext debe de devolver un objeto', () => { 

        const clave='Lo que sea';
        const edad=10;
        const user=usContext({clave, edad})

        

        expect(user).toEqual( {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

     })
 })