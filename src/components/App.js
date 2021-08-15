import '../styles/App.css';
import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {
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

      totalItems = ()=>{
        const {products} =this.state;
        var totalQty=0;
        products.map((item)=>{
          totalQty += item.qty;
        })
        return totalQty;
      }

  render(){
    return (
    <div className="App">
    <NavBar
      totalQty = {this.totalItems()}
    />
     <Cart 
       products = {this.state.products}
       handleIncQty = {this.increaseQty}
       handleDecQty = {this.decreaseQty}
       handleDelItem = {this.deleteItem}
     />
    </div>
  );
}
  }


export default App;
