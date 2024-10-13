import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";
describe('Pruebas en <CounterApp/>', () => { 

    const value=100;
    test('debe de hacer match con el snapshot', () => { 

        const {container}=render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();

     });
    
    test('debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={value}/>);
        expect(screen.getByText(value)).toBeTruthy();
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')//Aqui buscamos que el 100 se encuentre en un h2
     });
    
    test('debe de incrementar con el boton +1', () => { 

        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
     });
    test('debe de decrementar con el boton -1', () => { 

        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('-1'));
        // screen.debug(); para ver el estado del screen osea del dom, en este caso el html
        expect(screen.getByText('99')).toBeTruthy();
     });
    test('debe de funcionar el boton de reset', () => { 

        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        // fireEvent.click( screen.getByText('Reset'));

        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}))//el name es el texto que aparezca, en este caso queremos el name de btn-reset
        
        expect(screen.getByText(100)).toBeTruthy();
        
     });
    
 })