import styled from "styled-components";
import { useProductContext } from "./context//productContext";
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import PageNavigation from "./components/PageNavigation";
import { Container } from "./styles/Container";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";


const API = "https://drupaldecoupled.ddev.site/jsonapi/node/products";


const SingleProduct = () => {


  const { getSingleProduct, isLoading, singleProduct } = useProductContext();

  const { id } = useParams();


  const prodAttributes = {
    name: singleProduct.attributes.field_name,
    description: singleProduct.attributes.field_description,
    company: singleProduct.attributes.field_company,
    price: singleProduct.attributes.field_price,
  };


  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isLoading) {
    return <div className="page_loading">
      Loading...
    </div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={prodAttributes.name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product data */}
          <div className="product-data">
            <h2>{prodAttributes.name}</h2>
            <div className="product-data-price">
              MRP: ₹{prodAttributes.price}
            </div>
            <p>{prodAttributes.description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Years Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
