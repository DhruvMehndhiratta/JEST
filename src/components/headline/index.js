import React, { Component } from 'react';
import propTypes from 'prop-types';

class Headline extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { header, desc } = this.props
        if (!header) {
            return null;
        }
        return (
            <div data-test='headlineComponent'>
                <h1 data-test='headline-header'>{header}</h1>
                <p data-test='headline-desc'>
                    {desc}
                </p>
            </div>
        )
    }
}

Headline.propTypes = {
    header: propTypes.string,
    desc: propTypes.string,
    tempArr: propTypes.arrayOf(propTypes.shape({
        firstName: propTypes.string,
        lastName: propTypes.string,
        email: propTypes.string,
        age: propTypes.number,
        onlineStatus: propTypes.bool
    }))
}


export default Headline;