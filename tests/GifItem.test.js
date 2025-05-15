/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifItem } from '../src/components/GifItem';

describe('Test GifGrid', () => {
    it('Debe mostrar la imagen con el URL y el ALT indicados', () => {
        render(<GifItem gif={{ id: '1', title: 'Test Title', url: 'https://example.com/test.gif' }} />);
        const img = screen.getByRole('img');
        expect(img.src).toBe('https://example.com/test.gif');
        expect(img.alt).toBe('Test Title');
        //screen.debug();
    })
    it('Debe mostrar el título', () => {
        render(<GifItem gif={{ id: '1', title: 'Test Title', url: 'https://example.com/test.gif' }} />);
        const title = screen.getByText('Test Title');
        expect(title).toBeTruthy();
    })
    it('Debe hacer match con el Snapshot', () => {
        render(<GifItem gif={{ id: '1', title: 'Test Title', url: 'https://example.com/test.gif' }} />);
        const { container } = render(<GifItem gif={{ id: '1', title: 'Test Title', url: 'https://example.com/test.gif' }} />);
        expect(container).toMatchSnapshot(); // El snapshot se crea en la primera ejecución
    })
});