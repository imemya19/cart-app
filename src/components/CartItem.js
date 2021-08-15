import '../styles/CartItem.css';
import {FaPlusCircle,FaMinusCircle,FaTrash} from 'react-icons/fa'
import React from 'react'

class CartItem extends React.Component{
constructor(){
  super();
  this.state={
    title:"Choclate Box",
    price:500,
    qty:2
  }
}

  render(){
    const {title,price,qty} = this.state;
    return (
      <div className="cart-item">
        <div className="item-image">img</div>
        <div className="item-details">
          <div>{title}</div>
          <div> Rs. <span>{price}</span> </div>
          <div>Quantity : <span>{qty}</span></div>
          <div className="action-buttons">
            <FaPlusCircle className="action"/>
            <FaMinusCircle className="action"/>
            <FaTrash className="action"/> 
          </div>
        </div>
      </div>
    );
  }
  
}

export default CartItem;
