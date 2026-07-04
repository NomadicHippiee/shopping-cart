
import { useEffect } from 'react';
import { useProducts } from '../context/useProducts';
import { useCart } from '../context/useCart';
import { ProductCard } from '../components/ProductCard';

export default function Shop() {
    const { products, loading, error } = useProducts();
    const { dispatch } = useCart();

    const handleAddToCart = (product, quantity) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { product, quantity }
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='product-grid'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
        </div>
    );
}