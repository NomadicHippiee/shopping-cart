import { createContext, useEffect, useReducer } from "react";
import { fetchProducts } from "../api/productService";

export const ProductsContext = createContext();

const initialState = {
    products: [],
    loading: true,
    error: null
};

function productsReducer(state, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {...state, loading: action.payload };

        case 'SET_PRODUCTS':
            return {...state, products: action.payload, loading: false};

        case 'SET_ERROR':
            return {...state, error: action.payload, loading: false};

        default:
            return state;
    }
};

export function ProductsProvider({ children }) {
    const [state, dispatch] = useReducer(productsReducer, initialState);

    useEffect(() => {
        const loadProducts = async () => {
            dispatch({ type: 'SET_LOADING', payload: true});

            try {
                const data = await fetchProducts();
                dispatch({ type: 'SET_PRODUCTS', payload: data });
            } catch (err) {
                dispatch({ type: 'SET_ERROR', payload: err.message});
            }
        };
        
        loadProducts();
    }, []);

    return (
        <ProductsContext.Provider value={state}>
            {children}
        </ProductsContext.Provider>
    );
}

