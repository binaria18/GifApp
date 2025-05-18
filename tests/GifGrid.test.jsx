/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../src/components/GifGrid';
import useFetchGifs from '../src/hooks/useFetchGifs';

jest.mock('../src/hooks/useFetchGifs.js');

describe('Pruebas en GifGrid', () => {
    test('Debe mostrar el loading al iniciar', () => {
        useFetchGifs.mockReturnValue({
            misGifs: [],
            isLoading: true
        });
        render(<GifGrid category={'Inuyasha'} />)
        expect(screen.getByText('Cargando...')).toBeTruthy();
    })

    test('Debe mostrar items cuando se cargan los gifs', () => {
        
        const gifs = [
            {
                id: '1',
                title: 'Inuyasha',
                url: 'https://localhost/inuyasha.jpg'
            },
            {
                id: '2',
                title: 'Naruto',
                url: 'https://localhost/naruto.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            misGifs: gifs,
            isLoading: false
        });
        render(<GifGrid category={'Inuyasha'}/>)
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})