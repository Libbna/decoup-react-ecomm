import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { CgClose, CgMenu } from 'react-icons/cg';


const Nav = () => {

  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`

    .navbar-list {
      display: flex;
      gap: 4.8rem;
      li {
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .mobile-navbar--btn {
      display: none;
      .close-outline {
        display: none;
      }
    }
    .mobile-navbar--btn[name="close-outline"] {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color:#000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar--btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav--icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }
            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }
      .active .mobile-nav--icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }

      .cart-total--item {
        font-size: 1.5rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? 'navbar active' : 'navbar'}>
        <ul className='navbar-list'>
          <li>
            <NavLink to="/" className="navbar-link home-link" onClick={() => setMenuIcon(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navbar-link" onClick={() => setMenuIcon(false)}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className='cart-total--item'> 10 </span>
            </NavLink>
          </li>
        </ul>
        {/* Icons for resposive site - hamburger & close btns */}
        <div className='mobile-navbar--btn'>
          <CgMenu name='menu-outline' className='mobile-nav--icon'
            onClick={() => setMenuIcon(true)}
          />
          <CgClose name='close-outline' className='mobile-nav--icon close-outline'
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;