import React from 'react'

import RectangleAlbum from '../components/RectangleAlbum'
import '../styles/componentsStyles/RectangleAlbumGarden.scss'


const RectangleAlbumGarden = ({ SectionName }) => {

    return(
        <div className="RectangleAlbum__garden">
            <section className='NameSection__Rectangle'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection__Rectangle'>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                <RectangleAlbum AlbumName='Let It Bleed' ArtistName='Rolling Stone'/>
                
            </section>
        </div>
    )
}

export default RectangleAlbumGarden;
