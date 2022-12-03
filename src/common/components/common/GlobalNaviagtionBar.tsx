import Link from "next/link";

export default function GlobalNavigationBar() {
    return <div>
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/post"}>Posts</Link>
            <a>DarkMode</a>
        </nav>
    </div>
}