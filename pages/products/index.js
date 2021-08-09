import {useRouter} from 'next/router';
import Link from 'next/link';

function ProductsHomePage() {
    const router = useRouter();
    const allProducts = [
        { id: 'x01', name: 'Toaster'},
        { id: 'plt', name: 'Plate'},
        { id: 'BIG', name: 'Big Mac'}
    ];

    function handleClick25() {
        // Programatic links
        router.push('/products/25');
    }

    return (
    <div>
        <h1>Products Home Page</h1>
        <h3>Our products catalog:</h3>
        <ul>
        { allProducts.map(prod => 
            <li key={prod.id}><Link href={`/products/${prod.id}`}>{prod.name}</Link></li>)}
        </ul>
        <button onClick={handleClick25}>Goto Product 25</button>
    </div>
    );
}

export default ProductsHomePage;
