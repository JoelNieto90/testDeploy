import React from 'react'

import SquareAlbum from '../components/SquareAlbum'
import '../styles/componentsStyles/SquareAlbumGarden.scss'


const SquareAlbumGarden = ({ SectionName }) => {

    return(
        <div className="SquareAlbum__garden">
            <section className='NameSection__Square'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection__Square'>
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                <SquareAlbum album='Let It Bleed' artist='Rolling Stones' />
                
            </section>
        </div>
    )
}

export default SquareAlbumGarden;
