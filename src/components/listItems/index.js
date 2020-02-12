import React from 'react';
import propTypes from 'prop-types';

const ListItem = (props) => {
    const { title, desc } = props;
    if (!title) {
        return null;
    }
    return (
        <div data-test='ListItemComponent'>
            <h2 data-test='ListItemTitle'>{title}</h2>
            <p data-test="ListItemDescription">{desc}</p>
        </div>
    )
}

ListItem.propTypes = {
    title: propTypes.string,
    desc: propTypes.string
}

export default ListItem; 