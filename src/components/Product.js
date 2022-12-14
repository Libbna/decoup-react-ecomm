import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
  // console.log(props);
  return (
    <NavLink to={`/singleprod/${props.id}`}>
      <div className='card'>
        <figure>
          <img src={props.image} alt={props.name} />
          <figcaption className='caption'>{props.company}</figcaption>
        </figure>

        <div className='card-data'>
          <div className='card-data-flex'>
            <h3>{props.name}</h3>
            <p className='card-data--price'>{props.price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;