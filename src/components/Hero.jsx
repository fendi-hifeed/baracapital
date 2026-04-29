import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <p className={styles.tagline}>HIPMI Jawa Barat Investment Hub</p>
                <h1 className="animate-fade-in">Menghubungkan Modal<br />dengan Potensi</h1>
                <p className={`animate-fade-in ${styles.subtitle}`}>
                    Bara Capital adalah platform investasi dan pembiayaan yang memberdayakan 
                    pengusaha muda Jawa Barat untuk naik kelas melalui akses permodalan yang 
                    terstruktur, transparan, dan profesional.
                </p>
                <div className={styles.ctaButtons}>
                    <a href="#skema" className={styles.btnPrimary}>Pelajari Skema Pembiayaan</a>
                    <a href="#kontak" className={styles.btnSecondary}>Hubungi Kami</a>
                </div>
            </div>
            <div className={styles.fadeBottom}></div>
        </section>
    );
}
