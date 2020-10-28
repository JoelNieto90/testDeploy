import React from 'react'
import ButtonPurple from '../components/ButtonPurple'

import '../styles/componentsStyles/PurpleButtonGarden.scss'

const PurpleButtonGarden = () => {
    return(
        <section className='ButtonGarden__container'>
            <div className='Text__section'>
                <div className='FilterArtist'>
                    <h3>Filter Artist</h3>
                </div>
                <div className='data__section'>
                    <p>Week</p>
                    <p>Month</p>
                    <p>Year</p>
                </div>
            </div>
            <div className='Genre__section'>
                <ButtonPurple text='Jazz' className='button-purple'/>
                <ButtonPurple text='Rap' className='button-purple'/>
                <ButtonPurple text='Hip-Hop' className='button-purple'/>
                <ButtonPurple text='Rock' className='button-purple'/>
                <ButtonPurple text='Blues' className='button-purple'/>
                <ButtonPurple text='Latin Jazz' className='button-purple'/>
                <ButtonPurple text='Rap' className='button-purple'/>
                <ButtonPurple text='Rap' className='button-purple'/>
                <ButtonPurple text='Clasic Rock' className='button-purple'/>
                <ButtonPurple text='Country' className='button-purple'/>
                <ButtonPurple text='Country' className='button-purple'/>
            </div>
        </section>
    )
}

export default PurpleButtonGarden;
