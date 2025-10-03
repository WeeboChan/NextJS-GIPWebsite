"use client";
import Link from "next/link";
import logo from "../public/EchoTunnel VPN_LOGO.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="NavBarTop">
            <div className="flex items-center gap-4">
                <Image src={logo} width="50" height="50" alt="Logo" />
                <h1 className="ExampleProjectText">EchoTunnel</h1>
            </div>
            <ul className="flex gap-6">
                <li>
                    <Link className={`NavButton ${pathname === "/" ? "active" : ""}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`NavButton ${pathname === "/blog" ? "active" : ""}`} href="/blog">Blog</Link>
                </li>
                <li>
                    <Link className={`NavButton ${pathname === "/beschrijving" ? "active" : ""}`} href="/beschrijving">Beschrijving</Link>
                </li>
                <li>
                    <Link className={`NavButton ${pathname === "/blokschema" ? "active" : ""}`} href="/blokschema">Blokschema</Link>
                </li>
                <li>
                    <Link className={`NavButton ${pathname === "/planning" ? "active" : ""}`} href="/planning">Planning</Link>
                </li>
                <li>
                    <Link className={`NavButton ${pathname === "/prijsraming" ? "active" : ""}`} href="/prijsraming">Prijsraming</Link>
                </li>
            </ul>
        </nav>
    );
}