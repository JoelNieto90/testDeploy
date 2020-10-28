import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PagesStyles/SignIn.scss';
import Logo from '../Assets/Icons/logo.svg';
import Input from '../components/Input';
import ButtonWhite from '../components/ButtonWhite';

 const SignIn = () => {
        return(
            <main className='mainSignIn'>
                <img src={Logo} alt='Logo' />
                <form className='mainSignIn__form'>
                    <Input type='email' placeholder='e-mail' name='email' InputName='e-mail' />
                    <Input type='password' placeholder='password' name='password' InputName='Password'/>                  
                    <div className="theme-switch-wrapper">
                        <p>Mantener la sesion abierta</p>
                        <label className="theme-switch">
                        <input type="checkbox" id="checkbox" />
                            <div className="slider round"></div>
                        </label>
                    </div> 
                    <ButtonWhite text='Login' className='button' />
                    <section className='mainSignIn__form--link'>
                        <Link to='/'>Olvide mi contraseña</Link>
                        <Link to='/register'>Crear una cuenta</Link>
                    </section>
                </form>
            </main>
        )
    }

    export default SignIn;
