"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
                <div className={`container ${styles.navContainer}`}>
                    <Link href="/" className={styles.logo} onClick={handleNavClick}>
                        <span className={styles.logoText}>BARA CAPITAL</span>
                    </Link>

                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>
                                <Link href="/#skema" className={styles.navLink} onClick={handleNavClick}>
                                    SKEMA
                                </Link>
                            </li>
                            <li>
                                <Link href="/#visi-misi" className={styles.navLink} onClick={handleNavClick}>
                                    VISI MISI
                                </Link>
                            </li>
                            <li>
                                <Link href="/#tim" className={styles.navLink} onClick={handleNavClick}>
                                    TIM
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className={styles.navLink} onClick={handleNavClick}>
                                    PROYEK
                                </Link>
                            </li>
                            <li>
                                <Link href="/#kontak" className={`${styles.navLink} ${styles.cta}`} onClick={handleNavClick}>
                                    HUBUNGI KAMI
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <button 
                        className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
                <nav className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        <li>
                            <Link href="/#skema" className={styles.mobileNavLink} onClick={handleNavClick}>
                                SKEMA
                            </Link>
                        </li>
                        <li>
                            <Link href="/#visi-misi" className={styles.mobileNavLink} onClick={handleNavClick}>
                                VISI MISI
                            </Link>
                        </li>
                        <li>
                            <Link href="/#tim" className={styles.mobileNavLink} onClick={handleNavClick}>
                                TIM
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className={styles.mobileNavLink} onClick={handleNavClick}>
                                PROYEK
                            </Link>
                        </li>
                        <li>
                            <Link href="/#kontak" className={`${styles.mobileNavLink} ${styles.mobileCta}`} onClick={handleNavClick}>
                                HUBUNGI KAMI
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
