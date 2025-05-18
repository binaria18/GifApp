/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../src/components/AddCategory';

const valor = 'Inuyasha';

describe('Test formulario Categorías', () => {

    it('Debe cambiar el valor de la caja de texto', async () => {
        render(<AddCategory setCategories={ () => {} } />)
        const inputBuscador = screen.getByRole('textbox');
        fireEvent.input( inputBuscador, { target: { value: valor } } )
        expect( inputBuscador.value ).toBe(valor)
    })

    it('Debe llamar el setCategories si el input tiene un valor', () => {
        const adCategory = jest.fn(); // Crea una función simulada que permite afirmar que fue llamada
        render(<AddCategory setCategories={ adCategory } />)
        const inputBuscador = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( inputBuscador, { target: { value: valor } } )
        fireEvent.submit( form );
        screen.debug();
        expect( inputBuscador.value ).toBe('');
        expect( adCategory ).toHaveBeenCalled();
        expect( adCategory ).toHaveBeenCalledTimes(1); // Cuántas veces se ha llamado
    })

    it('No debe llamar el setCategories si el input está vacío', () => {
        const adCategory = jest.fn();
        render(<AddCategory setCategories={ adCategory } />)
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        expect( adCategory ).not.toHaveBeenCalled();
    })

});