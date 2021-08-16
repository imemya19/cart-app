import '../styles/App.css';
import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component {
  constructor(){
        super();
        this.state={
            products:[],
            loading:true    
        }
      this.db = firebase.firestore()
    }

    increaseQty = (item)=> {
        const {products} =this.state;
        const index = products.indexOf(item);
        // products[index].qty +=1;

        // this.setState({
        //     products,
        // })

        const docRef = this.db.collection('products').doc(products[index].id);
        docRef
        .update({
          qty: products[index].qty+1
        })
        .then(()=>{
          console.log('qty updated!')
        })
        .catch(()=>{
          console.log('err in updating qty')
        })
      }
      
      decreaseQty = (item)=> {
        const {products} =this.state;
        const index = products.indexOf(item);
        if(products[index].qty ===0) return;

        // products[index].qty -=1;
        // this.setState({
        //     products
        // })


        const docRef = this.db.collection('products').doc(products[index].id);
        docRef
        .update({
          qty: products[index].qty-1
        })
        .then(()=>{
          console.log('qty updated!')
        })
        .catch(()=>{
          console.log('err in updating qty')
        })
      }

      deleteItem = (item)=>{
        const {products} =this.state;
        // const index = products.indexOf(item);
        // const items = products.filter((item)=>item!==products[index])

        // this.setState({
        //     products:items
        // })

        const docRef = this.db.collection('products').doc(item.id);
        docRef
        .delete()
        .then(()=>{
          console.log('item deleted!')
        })
        .catch(()=>{
          console.log('err in deleting item')
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
        this.db
        .collection('products')
        .onSnapshot((snapshot)=>{
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

      addItem=()=>{
        this.db
        .collection('products')
        .add({
          price:56,
          title:"yoyo",
          qty:5
        })
        .then((docRef)=>{
          console.log(docRef)
        })
        .catch((err)=>{
          console.log(err)
        })
      }

  render(){
    const {products,loading} =this.state;
    return (
    <div className="App">
    <NavBar
      totalQty = {this.totalItems()}
    />
    <button onClick={this.addItem}>Add an item</button>
     <Cart 
       products = {products}
       handleIncQty = {this.increaseQty}
       handleDecQty = {this.decreaseQty}
       handleDelItem = {this.deleteItem}
     />

     <div>
     {loading && <h1>loading the data!</h1>}

       Cart Total: <span>{this.cartTotal()}</span>
     </div>
    </div>
  );
}
  }


export default App;
