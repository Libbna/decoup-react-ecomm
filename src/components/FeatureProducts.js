import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../context/productContext';
import Product from './Product';


const FeatureProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();

  const Wrapper = styled.section`

    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};

    .container {
      max-width: 120rem;
    }

    .card {
      border: 0.1rem solid rgb(170 170 170 / 40%);
      .card-data {
        padding: 0 2rem;
      }

      h3 {
        margin: 2rem 0;
        font-weight: 300;
        font-size: 2.4rem;
      }

      .btn {
        margin: 2rem auto;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid rgb(98 84 243);
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(98 84 243);
        font-size: 1.4rem;

        &:hover {
          background-color: rgb(98 84 243);
          color: #fff;
        }
      }
    }
  `;
  if (isLoading) {
    return (
      <div>
        ......isLoading
      </div>
    );
  }

  // const endPoints = featuredProducts.map((prod) => {
  //   return `jsonapi/node/products/${products.id}?include=field_image1`;
  // });

  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='intro-dataa'>
          <div className='common-heading'>Our Feature Service</div>
          <div className='grid grid-three-column'>
            {
              featuredProducts.map((curElem, index) => {
                return <Product
                  key={index}
                  id={curElem.id}
                  name={curElem.attributes.field_name}
                  company={curElem.attributes.field_company}
                  price={curElem.attributes.field_price}
                  image={curElem.attributes.field_image1}
                />;
              })
            }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeatureProducts;