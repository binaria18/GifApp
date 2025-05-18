import { useState } from 'react'
import React from 'react';

export const AddCategory = ( { setCategories, categories } ) => {

    const [inputValue, setInputValue] = useState('')

    const adCategory = () => {
        if(inputValue.trim().length <= 1) return
        if(categories?.includes(inputValue)) return
        setCategories([inputValue])
    }

    const limpiarFormulario = () => {
        setInputValue('')
        document.getElementById('category').value = ''
    }
    const onsubmit = (e) => {
        e.preventDefault()
        adCategory()    
        setInputValue('')
        document.getElementById('category').value = ''
    }
    return (
        <>
            <form onSubmit={ (e) => onsubmit(e) } aria-label='form'>
                <input 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder='Nueva categoría'
                    type="text" 
                    id="category"/>
                <button type="submit" id="btnAddCategory">Agregar</button>
                <button onClick={limpiarFormulario} id="btnLimpiar">Limpiar</button>
            </form>
        </>
    )
}