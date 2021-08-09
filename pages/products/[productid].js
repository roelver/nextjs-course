import { useRouter } from 'next/router';

function ProductsDetailPage() {
    const router = useRouter();

    const productId = router.query.productid;
    console.log(router.query);
    
    return (
    <div>
        <h1>Products Detail Page</h1>
        <h4>This page shows the product details for {productId}</h4>
    </div>
    );
}

export default ProductsDetailPage;
