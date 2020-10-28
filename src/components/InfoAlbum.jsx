import React, { Fragment } from 'react';
import ListAlbum from './ListAlbum';
import '../styles/componentsStyles/InfoAlbum.scss';

const InfoAlbum = ({imgAlbum, icon1, icon2, NameAlbum, Artist, Description, icon3, icon4}) => {
    return (
        <Fragment>
            <div className='InfoAlbum'>
                <img className='InfoAlbum__img' src={imgAlbum} alt='Album Image' />
                <section className='InfoAlbum__Subtitle'>
                    <p className='InfoAlbum__Subtitle--text'>// Album</p>
                    <p className='InfoAlbum__Subtitle--NameAlbum'>{NameAlbum}</p>
                    <p className='InfoAlbum__Subtitle--Artist'>{Artist}</p>
                    <p className='InfoAlbum__Subtitle--Description'>{Description}</p>
                    <ListAlbum number='1' song='Illusions' reproductions='42,822' time='3:21' />
                    <ListAlbum number='2' song='Conspiracy Generation' reproductions='67,420' time='3:30' />
                    <ListAlbum number='3' song='Conspiracy' reproductions='67,420' time='2:10' />
                    <ListAlbum number='4' song='Busy' reproductions='67' time='3:30' />
                    <ListAlbum number='5' song='Conspiracy Generation' reproductions='67,420' time='1:30' />
                    <ListAlbum number='200' song='Conspiracy Generation' reproductions='7,420' time='30:30' />
                </section>
            </div>
        </Fragment>
    );
}
 
export default InfoAlbum;
