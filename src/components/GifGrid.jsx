import React from 'react'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


/* Componente, recibe una categoría por parámetro y devuelve los gifs */
export const GifGrid = ({ category }) => { 

    const { misGifs, isLoading } = useFetchGifs( category ) 
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className='card-grid'>
                {/* Mapeo de gifs */}
                {   
                    misGifs.map( gif => 
                        <GifItem key={ gif.id } gif={ gif } />
                    ) 
                    
                }
            </div>
        </>
    )
}

export default GifGrid
