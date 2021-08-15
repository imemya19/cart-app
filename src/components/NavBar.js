import React from 'react'
import {FaCartArrowDown} from 'react-icons/fa'
import '../styles/NavBar.css';


const NavBar = (props)=>{

    const {totalQty} = props;
    return (
      <div className="navbar">
              <div className="heading">Our Cart-App</div>
              <div className="cart-icon"><FaCartArrowDown/>
              <div className="total-qty">{totalQty}</div>
              </div>
      </div>
    );
  }
  
export default NavBar;
