import '../styles/CartItem.css';
import {FaPlusCircle,FaMinusCircle,FaTrash} from 'react-icons/fa'
import React from 'react'

class CartItem extends React.Component{


  render(){
   const {title,price,qty} = this.props.item;
   const {item, handleIncQty,handleDecQty,handleDelItem} =this.props;
    return (
      <div className="cart-item">
        <div className="item-image">img</div>
        <div className="item-details">
          <div>{title}</div>
          <div> Rs. <span>{price}</span> </div>
          <div>Qty : <span>{qty}</span></div>
          <div className="action-buttons">
            <FaPlusCircle className="action" onClick={()=>handleIncQty(item)}/>
            <FaMinusCircle className="action" onClick={()=>handleDecQty(item)}/>
            <FaTrash className="action" onClick={()=>handleDelItem(item)}/> 
          </div>
        </div>
      </div>
    );
  }
  
}

export default CartItem;
