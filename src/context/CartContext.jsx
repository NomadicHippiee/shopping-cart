import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          } else {
            return item;
          }
        }); // <-- Close map here
      } else {
        return [...state, action.payload];
      }
      break;

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
      break;

    case "UPDATE_QUANTITY":
      return state.map((item) => {
        if (item.id === action.payload.productId) {
          return { ...item, quantity: action.payload.newQuantity };
        } else {
          return item;
        }
      });
      break;

    case "LOAD_FROM_STORAGE":
      return action.payload;
      break;
    default:
      return state;
  }
}

export function CartProvider( {children} ) {
    const [state, dispatch] = useReducer(cartReducer, []);

    useEffect(() =>{
        const savedCart = localStorage.getItem('cart');

        if (savedCart) {
            const parsedCart = JSON.parse(savedCart)
            dispatch({ type: 'LOAD_FROM_STORAGE', payload:parsedCart})
        }
    }, [])

    useEffect(() => {
        const cartJSON = JSON.stringify(state);

        localStorage.setItem('cart', cartJSON)
    }, [state])

    return (
        <CartContext.Provider value={{ state, dispatch}}>
            {children}
        </CartContext.Provider>
    )

}


