import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="kontak" className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <h3>Bara Capital</h3>
                        <p>From the Young Entrepreneurs, For the Young Entrepreneurs</p>
                        <div className={styles.contact}>
                            <p><strong>Kontak:</strong> 0881-0234-55069 (Mulki Nurhalim)</p>
                            <p><strong>Lokasi:</strong> Bandung, Jawa Barat</p>
                            <p><strong>Afiliasi:</strong> HIPMI Jawa Barat Investment Hub</p>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <h4>Navigasi</h4>
                        <ul>
                            <li><Link href="/">Beranda</Link></li>
                            <li><Link href="/#skema">Skema Pembiayaan</Link></li>
                            <li><Link href="/#visi-misi">Visi Misi</Link></li>
                            <li><Link href="/#tim">Tim Manajemen</Link></li>
                            <li><Link href="/portfolio">Proyek Aktif</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.disclaimer}>
                    <h5>DISCLAIMER</h5>
                    <p>
                        1. WEBSITE INI DAN SEMUA ISI-NYA HANYA UNTUK TUJUAN INFORMASI. BARA CAPITAL TIDAK MENYEDIAKAN NASIHAT INVESTASI, KEUANGAN, ATAU HUKUM MELALUI WEBSITE INI.
                        <br />
                        2. SEMUA INVESTASI MEMBAWA RISIKO, TERMASUK KEMUNGKINAN KERUGIAN MODAL. KINERJA MASA LALU BUKAN INDIKATOR HASIL MASA DEPAN.
                    </p>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} Bara Capital (PT Pengusaha Muda Babarengan). Hak cipta dilindungi.</p>
                </div>
            </div>
        </footer>
    );
}
