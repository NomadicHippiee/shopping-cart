export async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const data = await response.json();
        return data;


    } catch (error) {
        console.log('Error fetching products:', error);
        throw error;
    }
    
}