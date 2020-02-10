import React, { Component } from 'react';
import './styles.scss'


const Header = () => {
    return (
        <div className='header'>
            <div className='wrap'>
                <div className='logo-wrapper'>
                    <img className='logo' src={require('../../assets/logo.png')} />
                </div>

            </div>
        </div>
    )
}
export default Header
