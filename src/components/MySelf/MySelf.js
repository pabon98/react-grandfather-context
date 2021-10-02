import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
    const{house} = props

    return (
        <div>
            <h2>MySelf</h2>
            <h4>House: {house}</h4>
            <Special></Special>
        </div>
    );
};

export default MySelf;