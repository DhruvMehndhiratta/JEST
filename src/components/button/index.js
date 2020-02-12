import React, { Component } from 'react';
import propTypes from 'prop-types';


const SharedButton = (props) => {
    const { buttonText } = props;
    console.log(props, "prpos")

    const submitEvent = () => {
        if (props.emitEvent) {
            props.emitEvent();
        }
    }

    return (
        <button onClick={submitEvent} data-test='buttonComponent'>{buttonText}</button>
    )
}

SharedButton.propTypes = {
    buttonText: propTypes.string,
    emitEvent: propTypes.func
}

export default SharedButton