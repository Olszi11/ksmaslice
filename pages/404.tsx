import Link from 'next/link';

// TODO: Fetch the data from CMS to make dynamic editable content
export default function Page404() {
    return (
        <section>
            <h1>404</h1>
            <h2>Sorry, I can not find this page ;(</h2>
            <Link href="/">Back to home</Link>
        </section>
    );
}
