import { createContext, useContext } from "react";


export const CartContext = createContext({
    items: [],
    total: 0,
    totalPrice: 0,
    addToCart(meal,quantity) {},
    decreaseQuantity(index) {},
    increaseQuantity(index) {},
    removeItem(index) {},
    clearCart() {},
    

});

export function useCartContext() {
    return useContext(CartContext);
}