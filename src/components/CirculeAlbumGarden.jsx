import React from 'react'

import CircleAlbum from '../components/CircleAlbum'
import '../styles/componentsStyles/CircleAlbumGarden.scss'


const CircleAlbumGarden = ({ SectionName }) => {

    return(
        <div className="CircleAlbum__garden">
            <section className='NameSection'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection'>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
                <CircleAlbum AlbumName='Let It Bleed'ArtistName='Rolling Stones'/>
            </section>
        </div>
    )
}

export default CircleAlbumGarden;
