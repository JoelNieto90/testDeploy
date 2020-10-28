import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/RectangleAlbum.scss'

const RectangleAlbum = (props) => {
    const {  spt_album_id, cover_image_url, name  } = props;
    return(
        <Link to={`/album/${spt_album_id}`}>
            <div className='RectangleCover'>
                <img src={cover_image_url} alt='cover' />
                <div className="AlbumDetails">
                    <div className='AlbumDetails__information'>
                        <h3>{name}</h3>
                        <p>{name}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RectangleAlbum;