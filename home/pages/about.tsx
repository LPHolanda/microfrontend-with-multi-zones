import Link from 'next/link'

export default function About() {
    return (
        <div>
            <main className={"flex flex-col items-center"}>
                <h1>
                    Welcome to Multi Zones /about
                </h1>

                <Link className={"text-blue-500"} href="/">
                    <h2>Go back to Home (same zone) &rarr;</h2>
                </Link>
            </main>
        </div>
    )
}