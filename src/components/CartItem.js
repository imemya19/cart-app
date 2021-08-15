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
increaseQty = ()=> {
  this.setState((prevState)=>{
    return{
      qty:prevState.qty+1
    }
  })
}

deccreaseQty = ()=> {
  this.setState((prevState)=>{
    if(prevState.qty==1) return;
    return{
      qty:prevState.qty-1
    }
  })
}
  render(){
const {title} = this.props ;
   const {price,qty} = this.state;
    return (
      <div className="cart-item">
        <div className="item-image">img</div>
        <div className="item-details">
          <div>{title}</div>
          <div> Rs. <span>{price}</span> </div>
          <div>Qty : <span>{qty}</span></div>
          <div className="action-buttons">
            <FaPlusCircle className="action" onClick={this.increaseQty}/>
            <FaMinusCircle className="action" onClick={this.deccreaseQty}/>
            <FaTrash className="action"/> 
          </div>
        </div>
      </div>
    );
  }
  
}

export default CartItem;
