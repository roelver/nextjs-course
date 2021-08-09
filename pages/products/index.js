import Link from 'next/link';

function ProductsHomePage() {
    const allProducts = [
        { id: 'x01', name: 'Toaster'},
        { id: 'plt', name: 'Plate'},
        { id: 'BIG', name: 'Big Mac'}
    ];
    return (
    <div>
        <h1>Products Home Page</h1>
        <h3>Our products catalog:</h3>
        <ul>
        { allProducts.map(prod => 
            <li key={prod.id}><Link href={`/products/${prod.id}`}>{prod.name}</Link></li>)}
        </ul>
    </div>
    );
}

export default ProductsHomePage;
