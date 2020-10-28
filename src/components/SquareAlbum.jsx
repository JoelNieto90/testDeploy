import React from 'react';
import '../styles/componentsStyles/SquareAlbum.scss'
import ArtistImg from '../Assets/RollingCover.jpeg'

const SquareAlbum = ({ album, artist }) => {
  return (
    <>
      <div className='SquareAlbum__container'>
        <img src={ArtistImg} alt="Artist"/>
        <p>{album}</p>
        <span>{artist}</span>
      </div>
    </>
  )
}

export default SquareAlbum;