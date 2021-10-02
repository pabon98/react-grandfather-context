import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
 
   const [ornaments,house] =  useContext(RingContext)
   console.log(ornaments)
    return (
        <div>
            <h2>Special</h2>
            <h4>{ornaments}</h4>
            <h5>House: {house}</h5>
        </div>
    );
};

export default Special;

