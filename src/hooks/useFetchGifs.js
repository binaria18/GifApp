import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
export const useFetchGifs = ( category ) => {
    const [ misGifs, setMisGifs ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect( () => {
        setIsLoading(true)
        getGifs( category, setMisGifs ) 
        setIsLoading(false)
    }
    , [ category ] ) 

    return {
        misGifs,
        isLoading
    }
}

export default useFetchGifs
