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

        render(<AddCategory setCategories={ () => {} } />)
        const inputBuscador = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( inputBuscador, { target: { value: valor } } )
        fireEvent.submit( form );
        screen.debug();
        expect( inputBuscador.value ).toBe('');
        //expect( setCategories ).toHaveBeenCalled();
    })

});