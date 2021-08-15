import React from 'react'
import CartItem from './CartItem'


class Cart extends React.Component{
render(){
    return (
      <div className="cart">
    <h1>Our Cart-App</h1>
      <CartItem title="somya"/>
      <CartItem title="shivang"/>

      </div>
    );
  }
  
}

export default Cart;
