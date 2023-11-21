import React from 'react'

const PokemonThumb = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className='p-5 hover:cursor-pointer hover:bg-white border rounded-lg bg-slate-300 justify-center items-center text-center'>
            <div className="number"><small>#0{id}</small></div>
            <img className='m mx-auto' src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumb