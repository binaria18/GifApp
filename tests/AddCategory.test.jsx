/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../src/components/AddCategory';

describe('Test formulario Categorías', () => {
    it('Debe cambiar el valor de la caja de texto', async () => {
        render(<AddCategory setCategories={ () => {} } />)
        const inputBuscador = screen.getByRole('textbox');
        fireEvent.input( inputBuscador, { target: { value: 'Inuyasha' } } )
        expect( inputBuscador.value ).toBe('Inuyasha')
    })

});