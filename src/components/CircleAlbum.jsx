import React from 'react'

import Cover from '../Assets/RollingCover.jpeg'
import '../styles/componentsStyles/CircleAlbum.scss'


const CircleAlbum = ({ AlbumName, ArtistName }) => {

    return(
        <div className="CircleAlbum__container">
            <img src={Cover} alt='Cover'/>
            <h6>{AlbumName}</h6>
            <p>{ArtistName}</p>
        </div>
    )
}

export default CircleAlbum;