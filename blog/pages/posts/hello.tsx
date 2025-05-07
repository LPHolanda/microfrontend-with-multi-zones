import Link from "next/link";

export default function Hello() {
    return (
        <main className={"flex flex-col items-center"}>
            <h1>
                Hello post (Zone B)
            </h1>
            <Link className={"text-red-500"} href="/">
                <h2>Go back to Blog &rarr;</h2>
            </Link>
        </main>
    )
}