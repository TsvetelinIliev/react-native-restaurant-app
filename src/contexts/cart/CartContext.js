import { createContext, useContext } from "react";


export const CartContext = createContext({
    items: [],
    total: 0,
    addToCart(meal,quantity) {},
    decreaseQuantity(index) {},
    increaseQuantity(index) {},

});

export function useCartContext() {
    return useContext(CartContext);
}