import React, { Component } from 'react';

export const CartContext = React.createContext(); 

export class CartProvider extends Component {
     constructor(props){
         super(props);
         this.state = {
             Cart: []
         }
         this.addToCart = this.addToCart.bind(this)
         this.deleteItem = this.deleteItem.bind(this)
     }

    addToCart(product){
        this.setState({
            Cart: this.state.Cart.concat(product)
        })
    }

    deleteItem(index){
        console.log('index: ', index);
        if(index === 0){
            this.setState({
                Cart: this.state.Cart.slice(index + 1)

            })
        }else{
            this.setState({
                Cart: [
                    ...this.state.Cart.slice(0,index),
                    ...this.state.Cart.slice(index+1)
                ]
            })
        }
        console.log(this.state.Cart);
    }

    render() {
        return (
            <CartContext.Provider value={{
                Cart: this.state.Cart,
                addToCart: this.addToCart,
                deleteItem: this.deleteItem
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

