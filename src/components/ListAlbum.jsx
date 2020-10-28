import React, { Fragment } from 'react';
import '../styles/componentsStyles/ListAlbum.scss';

//********  Icons  **********//
import { FavouriteIcon, DownloadItemsIcon, ShareIcon, PlusIcon } 
from '../components/Icons';

const ListAlbum = (props) => {
    return (
        <Fragment>
            <section className='listAlbum'>
                <p className='listAlbum__Number'>{props.data.cant}</p>
                <button className='listAlbum__Favourite'>
                    {<FavouriteIcon />}
                </button>
                <button className='listAlbum__Plus'>
                    {<PlusIcon />}
                </button>
                <button className='listAlbum__Song'>{props.data.name}</button>
                <p className='listAlbum__Reproductions'>{props.data.name}</p>
                <p className='listAlbum__Time'>{props.data.name}</p>
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