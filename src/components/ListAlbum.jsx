import React, { Fragment } from 'react';
import '../styles/componentsStyles/ListAlbum.scss';

//********  Icons  **********//
import { FavouriteIcon, DownloadItemsIcon, ShareIcon, PlusIcon } 
from '../components/Icons';

const ListAlbum = ({number, icon, song, reproductions, time}) => {
    return (
        <Fragment>
            <section className='listAlbum'>
                <p className='listAlbum__Number'>{number}</p>
                <button className='listAlbum__Favourite'>
                    {<FavouriteIcon />}
                </button>
                <button className='listAlbum__Plus'>
                    {<PlusIcon />}
                </button>
                <button className='listAlbum__Song'>{song}</button>
                <p className='listAlbum__Reproductions'>{reproductions}</p>
                <p className='listAlbum__Time'>{time}</p>
                <button className='listAlbum__Download'>
                    {<DownloadItemsIcon />}
                </button>
                <button className='listAlbum__Share'>
                    <ShareIcon />
                </button>
                <button className='listAlbum__Points'>...</button>
            </section>
        </Fragment>
    );
}
 
export default ListAlbum;