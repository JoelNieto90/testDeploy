import React from 'react'

import RectangleAlbum from '../components/RectangleAlbum'
import '../styles/componentsStyles/RectangleAlbumGarden.scss'


const RectangleAlbumGarden = ({ SectionName }) => {
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return(
        <div className="RectangleAlbum__garden">
            <section className='NameSection__Rectangle'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection__Rectangle'>
                {
                albumLocalStorage.map((item) => (
                    <RectangleAlbum data={item} key={item.spt_album_id} {...item}/>
                    ))
                }
                
            </section>
        </div>
    )
}

export default RectangleAlbumGarden;
