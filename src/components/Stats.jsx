import styles from "./Stats.module.css";

const stats = [
    { label: "Kota/Kabupaten di Jawa Barat", value: "27" },
    { label: "Maksimal Ticket Size per Proyek", value: "Rp 2M" },
    { label: "Skema Pembiayaan Fleksibel", value: "4 Jenis" },
    { label: "Tim Direksi Ahli", value: "5+" }
];

export default function Stats() {
    return (
        <section className={`section ${styles.statsSection}`}>
            <div className={`container ${styles.statsContainer}`}>
                <div className={styles.header}>
                    <h2>Cakupan & Kapasitas Kami</h2>
                    <p>
                        Bara Capital beroperasi di bawah jaringan HIPMI Jawa Barat dengan jangkauan 
                        ke 27 kota/kabupaten dan kapasitas pembiayaan hingga Rp 2 Miliar per proyek.
                    </p>
                </div>

                <div className={styles.grid}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.statItem}>
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
