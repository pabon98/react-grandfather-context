import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Mother/Mother';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {house} = props
    return (
      <div>
        <h2>GrandFather</h2>
        <h4>House: {house}</h4>
        <div style={{display: 'flex'}}>
          <Father house={house} ></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    );
};

export default GrandFather;