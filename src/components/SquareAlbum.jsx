import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/SquareAlbum.scss'


const SquareAlbum = (props) => {
    const { spt_album_id, cover_image_url, name } = props;
    
    return (
      <div className='SquareAlbum__container'>
        <Link to={`/album/${spt_album_id}`}>
          <img src={cover_image_url} alt="Cover Album"/>
        </Link>
          <p>{name}</p>
          <span>{name}</span>
        </div>
  )
}

export default SquareAlbum;