import React from 'react'

export const GifItem = ({ gif }) => { 

    return (
        <div className="gifCard">
            <img 
                key={ gif.id } src={ gif.url } alt={ gif.title } 
                className="gifCard" />
            <div className='gifText'>
                { gif.title }
            </div>
        </div>
    )
}