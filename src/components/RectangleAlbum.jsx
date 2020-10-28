import React from 'react'

import '../styles/componentsStyles/RectangleAlbum.scss'
import albumCover from '../Assets/RollingCover.jpeg'

const RectangleAlbum = ({ AlbumName, ArtistName }) => {
    return(
        <div className='RectangleCover'>
            <img src={albumCover} alt='cover' />
            <div className="AlbumDetails">
                <div className='AlbumDetails__information'>
                    <h3>{AlbumName}</h3>
                    <p>{ArtistName}</p>
                </div>
            </div>
        </div>
    )
}

export default RectangleAlbum;