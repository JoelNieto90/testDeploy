import React, { Fragment } from 'react';
import ListAlbum from './ListAlbum';
import '../styles/componentsStyles/InfoAlbum.scss';

function InfoAlbum(props) {
        const songsLocalStorage = JSON.parse( localStorage.getItem("songs"))

         // se obtienen solo las canciones del album en cuestion
    const ingredients = songsLocalStorage.filter( (item) => {
        return item.Recipe === props.data.id
    })

    return (
        <Fragment>
            <div className='InfoAlbum'>
                <img className='InfoAlbum__img' src={props.data.cover_image_url} alt='Album Cover' />
                <section className='InfoAlbum__Subtitle'>
                    <p className='InfoAlbum__Subtitle--text'>Album</p>
                    <p className='InfoAlbum__Subtitle--NameAlbum'>{props.data.name}</p>
                    <p className='InfoAlbum__Subtitle--Artist'>{props.data.artists.name}</p>
                    <p className='InfoAlbum__Subtitle--Description'>{props.data.name}</p>
                            {
                                ingredients.map( (item) => (
                                    <ListAlbum data={item} key={item.id}/>
                                ))
                            }
                </section>
            </div>
        </Fragment>
    );
}
 
export default InfoAlbum;
