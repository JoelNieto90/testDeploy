import React, { Component }  from 'react';
import Input from '../components/Input';
import '../styles/PagesStyles/Register.scss';
import Logo from '../Assets/Icons/logo.svg';
import ButtonWhite from '../components/ButtonWhite';

export default class Register extends Component {

    render() {
        return(
            <main className='mainRegister'>
                <img src={Logo} alt='Logo' />
                <form className='mainSignIn__form'>
                    <label>Nombre de Usuario</label>
                    <Input type='text' placeholder='Nombre de Usuario' name='username' />
                    <label>e-mail</label>
                    <Input type='email' placeholder='e-mail' name='e-mail' />
                    <label>Password</label>
                    <Input type='password' placeholder='password' name='password' />
                    <label>Confirmar Password</label>
                    <Input type='password' placeholder='password' name='password' />
                    <ButtonWhite text='Crear Cuenta' className='button' />
                </form>

            </main>
        )
    }
}