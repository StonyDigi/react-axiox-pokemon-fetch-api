import React from 'react'
import './App.css'

const Pokemon = ({name, url}) => {
  return (
    <div className='pokemon-container'>

        <h3>{name}</h3>
        <a href={url}>{url}</a>

    </div>
  )
}

export default Pokemon