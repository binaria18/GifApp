/* eslint-disable no-undef */
import React from 'react';
import { renderHook } from '@testing-library/react';
import useFetchGifs from '../src/hooks/useFetchGifs';


describe('Pruebas en hook useFetchGifs', () => {
    test('Debe regresar el estado inicial', () => {
        
        const { result } = renderHook(() => useFetchGifs('Inuyasha'));
        const { misGifs, isLoading } = result.current;
        expect(misGifs.length).toBe(0);
        expect(isLoading).toBe(false);
    })

})