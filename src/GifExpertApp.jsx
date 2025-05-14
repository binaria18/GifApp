import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Inuyasha' ])

    return (
    <div>
        <h1>GifExpert App</h1>
        <AddCategory setCategories={setCategories} categories={categories}/>
        {
            categories.map( category => ( 
                    <GifGrid key={category} category={category}/>
                )
            )
        }

    </div>
    )
}

export default GifExpertApp
