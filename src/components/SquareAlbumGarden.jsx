import React from 'react'

import SquareAlbum from '../components/SquareAlbum'

import '../styles/componentsStyles/SquareAlbumGarden.scss'


const SquareAlbumGarden = ({ SectionName }) => {
    
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return(
        <div className="SquareAlbum__garden">
            <section className='NameSection__Square'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection__Square'>
                {
                albumLocalStorage.map((item) => (
                    <SquareAlbum data={item} key={item.spt_album_id} {...item}/>
                    ))
                }
                
            </section>
        </div>
    )
}

export default SquareAlbumGarden;
