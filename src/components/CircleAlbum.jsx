import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/CircleAlbum.scss'


const CircleAlbum = (props) => {
    const { id, cover_image_url, name } = props;

    return(
        <div className="CircleAlbum__container">
            <Link to={`/album/${id}`}>
                <img src={cover_image_url} alt='Cover'/>
            </Link>
            <h6>{name}</h6>
            <p>{name}</p>
        </div>
    )
}

export default CircleAlbum;