import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Sister = () => {
  
    const [ring,house] = useContext(RingContext)
    return (
        <div>
            <h2>Sister</h2>
            <h4>House: {house}</h4>
            <h4>{ring}</h4>
        </div>
    );
};

export default Sister;