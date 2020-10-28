import React, { useEffect }  from 'react';

import Panel from '../components/Panel';
import '../styles/PagesStyles/Home.scss';
import CircleAlbumGarden from '../components/CirculeAlbumGarden';
import TopTracks from '../components/TopTracks';
import PurpleButtonGarden from '../components/PurpleButtonGarden'
import SquareAlbumGarden from '../components/SquareAlbumGarden'
import RectangleAlbumGarden from '../components/RectangleAlbumGarden';


const Home = () => {
    useEffect(() => {
        window.scroll(0, 0)
      }, []);
      
        return(
            <div className='Home__container'>
                    <Panel />
                    <section className='Content__section'>
                        <CircleAlbumGarden SectionName='Section Name'/>
                        <SquareAlbumGarden SectionName='Tendencia'/>
                        <PurpleButtonGarden />
                        <RectangleAlbumGarden SectionName='Tendencia'/>
                        <TopTracks />
                    </section>
                    
                </div>
        )
}
export default Home;