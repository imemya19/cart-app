import React from 'react'
import CartItem from './CartItem'


class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    title:"Choclate Box",
                    price:500,
                    qty:2
                },
                {
                    title:"Uncle chips",
                    price:200,
                    qty:18
                },
                {
                    title:"Fried momos",
                    price:350,
                    qty:6
                }
            ]     
      }
    }

    increaseQty = (item)=> {
        const {products} =this.state;
        const index = products.indexOf(item);
        products[index].qty +=1;

        this.setState({
            products
        })
      }
      
      decreaseQty = (item)=> {
        const {products} =this.state;
        const index = products.indexOf(item);
        if(products[index].qty ===0) return;

        products[index].qty -=1;
        this.setState({
            products
        })
      }

      deleteItem = (item)=>{
        const {products} =this.state;
        const index = products.indexOf(item);
        const items = products.filter((item)=>item!==products[index])

        this.setState({
            products:items
        })
      }

render(){
    const {products} = this.state;
    return (
      <div className="cart">
        <h1>Our Cart-App</h1>


      {products.map((item)=>{
          return(
            <CartItem 
            item={item} 
            handleIncQty = {this.increaseQty}
            handleDecQty = {this.decreaseQty}
            handleDelItem = {this.deleteItem}
            />
      )
 
      })}

      </div>
    );
  }
  
}

export default Cart;
