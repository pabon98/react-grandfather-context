import React, { useContext } from 'react';
import { RingContext } from '../../App';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Mother = (props) => {
    const{house}= props
    const [ring] = useContext(RingContext)
    return (
      <div>
        <h2>Mother</h2>
        <p>House: {house}</p>
        <h3>{ring}</h3>
        <div style={{ display: "flex" }}>
          <Brother house={house}></Brother>
          <MySelf house={house} ></MySelf>
          <Sister house={house}></Sister>
        </div>
      </div>
    );
};

export default Mother;