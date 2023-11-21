import React from 'react'

const PokemonThumb = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className='p-5 border rounded-lg bg-slate-200'>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumb