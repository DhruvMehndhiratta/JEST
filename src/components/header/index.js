import React, { Component } from 'react';
import './styles.scss'


const Header = () => {
    return (
        <div className='header-component' data-test="header-component">
            <div className='wrap'>
                <div className='logo-wrapper'>
                    <img className='logo' data-test='logo' src={require('../../assets/logo.png')} />
                </div>

            </div>
        </div>
    )
}
export default Header
