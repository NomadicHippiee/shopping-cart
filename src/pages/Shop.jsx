
import { useEffect } from 'react';
import { useProducts } from '../context/useProducts';

export default function Shop() {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='product-grid'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}