import Link from 'next/link';

function HomePage() {
    return (
    <div>
        <h1>Home Page</h1>
        <ul>
            <li><Link href='/products'>Products Index</Link></li>
            <li><Link href='/products/15'>Product 15</Link></li>
        </ul>
    </div>
    );
}

export default HomePage;
