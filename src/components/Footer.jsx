import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <h3>Bara Capital</h3>
                    </div>
                    <div className={styles.links}>
                        <Link href="/portfolio">Portfolio</Link>
                    </div>
                </div>

                <div className={styles.disclaimer}>
                    <h5>DISCLAIMER</h5>
                    <p>
                        1. THIS WEBSITE AND ITS CONTENT ARE FOR INFORMATIONAL PURPOSES ONLY. BARA CAPITAL DOES NOT PROVIDE INVESTMENT, FINANCIAL, OR LEGAL ADVICE THROUGH THIS WEBSITE.
                        <br />
                        2. ALL INVESTMENTS INVOLVE RISK, INCLUDING THE POSSIBLE LOSS OF PRINCIPAL. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.
                    </p>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} Bara Capital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
