import '../styles/App.css';
import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import firebase from 'firebase'
class App extends React.Component {
  constructor(){
        super();
        this.state={
            products:[],
            loading:true    
      }
    }

    increaseQty = (item)=> {
        const {products} =this.state;
        const index = products.indexOf(item);
        products[index].qty +=1;

        this.setState({
            products,
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

      cartTotal = ()=>{
        const {products} =this.state;
        var total=0;
        products.map((item)=>{
          total += (item.qty * item.price);
        })
        return total;
      }

      componentDidMount(){
        firebase
        .firestore()
        .collection('products')
        .get()
        .then((snapshot)=>{
         const products =  snapshot.docs.map((doc)=>{
          const data =  doc.data();
          data["id"] = doc.id
          return data;
          })
          this.setState({
            products,
            loading:false
          })

        })
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

     <div>
     {this.state.loading && <h1>loading the data!</h1>}

       Cart Total: <span>{this.cartTotal()}</span>
     </div>
    </div>
  );
}
  }


export default App;
