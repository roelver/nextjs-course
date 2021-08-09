import { useRouter } from 'next/router';

function BlogPostPage() {
    const router = useRouter();

    const items = router.query.name;

    return (
        <div>
            <h1>The Blog Post page </h1>
            <ul>
                { items && items.map(item => <li key={item}>{item}</li>)}
             </ul>
        </div>
    )
}
export default BlogPostPage;