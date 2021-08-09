import Link from 'next/link';

function NotFoundPage() {
    return (
    <div>
        <h1>This page does not exist Page</h1>
        <ul>
            <li><Link href='/'>Go back to the Home Page</Link></li>
        </ul>
    </div>
    );
}

export default NotFoundPage;
