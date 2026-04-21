"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.png" alt="Bara Capital" className={styles.logoImage} />
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link href="/portfolio" className={styles.navLink}>
                                PORTFOLIO
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
