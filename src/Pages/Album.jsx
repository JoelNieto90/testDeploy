import React from 'react'
import { useParams } from 'react-router-dom';

import Panel from '../components/Panel'
import InfoAlbum from '../components/InfoAlbum'

import '../styles/PagesStyles/Album.scss'

const Album = () => {
    const {myId} = useParams();

    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))
    const album = albumLocalStorage.find(item => item.spt_album_id === parseInt(myId));

    return(
        <div className='Album__container'>
                <Panel />
                <section className='ContentSection__Album'>
                    <InfoAlbum data={album} key={album.spt_album_id} />
                   
                </section>
                
            </div>
    )
}

export default Album;
