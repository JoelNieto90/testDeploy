import React, { Component }  from 'react';

import Panel from '../components/Panel';
import '../styles/PagesStyles/Home.scss';
import CircleAlbumGarden from '../components/CirculeAlbumGarden';
import InfoAlbum from '../components/InfoAlbum';
import TopTracks from '../components/TopTracks';
import AlbumArtist from '../Assets/AlbumArtist.PNG';
import PurpleButtonGarden from '../components/PurpleButtonGarden'
import SquareAlbumGarden from '../components/SquareAlbumGarden'
import RectangleAlbumGarden from '../components/RectangleAlbumGarden';


export default class Home extends Component {
    render() {
        return(
            <div className='Home__container'>
                    <Panel />
                    <section className='Content__section'>
                        <CircleAlbumGarden SectionName='Section Name'/>
                        <SquareAlbumGarden SectionName='Tendencia'/>
                        <PurpleButtonGarden />
                        <RectangleAlbumGarden SectionName='Tendencia'/>
                        <InfoAlbum imgAlbum={AlbumArtist} NameAlbum='Illisions' Artist='Ibrahim Maalouf' Description='The artists we represent are one of the most successful in Romania and also were a huge breakthrough in the international market, topping radio and sales around the world.' />
                        <TopTracks />
                    </section>
                    
                </div>
        )
    }
}