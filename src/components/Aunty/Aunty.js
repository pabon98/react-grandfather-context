import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunty = (props) => {
    const{house}=props
    const [ornaments] = useContext(RingContext)
    return (
        <div>
            <h2>Aunty</h2>
            <h4>House: {house}</h4>
            <p>{ornaments}</p>
        </div>
    );
};

export default Aunty;