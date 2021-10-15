import Link from 'next/link'
import Head from "next/head";

const Caught = () => {
    return (
        <>
            <Head>
            <title>Caught Pokemon</title>
            </Head>
            <h1>Caught</h1>
            <Link href="/">
                <a>back to home</a>
            </Link>
        </>    
    )
}

export default Caught