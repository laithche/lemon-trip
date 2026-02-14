import Link from "next/link"; //link a differenza di a precarica la pagina prima che ci clicchi
import Image from "next/image";

export default function Collections() {
    return <>
    <h1>Collections page</h1>
    <Link href="/collections/acidlemonade">acid lemonade</Link>
    </>
}