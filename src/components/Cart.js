import React from 'react'
import CartItem from './CartItem'


const Cart =(props)=>{

    const {products} = props;
    return (
      <div className="cart">

      {products.map((item)=>{
          return(
            <CartItem 
            item={item} 
            handleIncQty = {props.handleIncQty}
            handleDecQty = {props.handleDecQty}
            handleDelItem = {props.handleDelItem}
            />
      )
 
      })}

      </div>
    );
  }
  


export default Cart;
