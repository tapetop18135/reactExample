import React, { Component } from 'react';
// import {Product , Cart} from '../components/index'
import Product from '../components/product'
import Cart from '../components/cart'

class App extends Component {

  state = {
    products : [
              { id: 1, name: 'Product#1', amount: 10, buy: 0 },
              { id: 2, name: 'Product#2', amount: 9, buy: 0 },
              { id: 3, name: 'Product#3', amount: 8, buy: 0 },
              { id: 4, name: 'Product#4', amount: 7, buy: 0 },
              { id: 5, name: 'Product#5', amount: 6, buy: 0 }
            ]
  }
  
  addProduct = (id) => {
    // let pro = this.state.products.filter(p => {return(p.id === id)})
    let index = this.state.products.findIndex((i)=>{return (i.id === id)})
    // console.log(index)
    let prod = this.state.products[index]
    
    this.setState(
      {products : [ ...this.state.products.slice(0,index) ,
       {...prod,amount : prod.amount - 1 , buy : prod.buy + 1},
        ...this.state.products.slice(index+1)
      ]} )
  }
  getProduct = () => {
    let t = this.state.products.filter((v) => {return v.amount > 0})
    console.log(t)
    return(t)
  }
  getCart = () => {
    return(this.state.products.filter((v) => {return v.buy >= 0}))
  }
  render() {
    return (
      <div className="App">
        
        <Product addProduct={this.addProduct} products={this.getProduct()} />
        <hr />
        {/* {this.getProduct()} */}
        <Cart />
      </div>
    );
  }
}

export default App;
