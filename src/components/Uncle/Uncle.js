import React from 'react';

const Uncle = (props) => {
    const{house}= props
    return (
        <div>
            <h2>Uncle</h2>
            <h4>House: {house}</h4>
        </div>
    );
};

export default Uncle;