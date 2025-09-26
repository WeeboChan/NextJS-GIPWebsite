"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold">Example Project</h1>
            <ul className="flex gap-6">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/beschrijving">Beschrijving</Link>
                </li>
                <li>
                    <Link href="/Blokschema">Blokschema</Link>
                </li>
                <li>
                    <Link href="/Planning">Planning</Link>
                </li>
                <li>
                    <Link href="/Prijsraming">Prijsraming</Link>
                </li>
            </ul>
        </nav>
    );
}