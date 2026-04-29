import styles from "./page.module.css";

const projects = [
    {
        name: "MBG - Makan Bergizi Gratis",
        tags: ["Program Pemerintah", "Batch 1"],
        desc: "Program Makan Bergizi Gratis untuk mendukung ketahanan pangan nasional.",
        nilai: "Rp 500Jt - 2M",
        return: "Sesuai skema"
    },
    {
        name: "Corporate Affairs Award (Astra)",
        tags: ["Corporate", "Event"],
        desc: "Corporate Affairs Award oleh Astra International.",
        nilai: "Rp 300Jt",
        return: "8%"
    },
    {
        name: "Padel Event by Blibli",
        tags: ["Sports", "Event"],
        desc: "Event Padel yang diselenggarakan oleh Blibli.",
        nilai: "Rp 350Jt",
        return: "4% (2 bulan)"
    },
    {
        name: "Mayo Collection (Denim)",
        tags: ["Fashion", "UMKM"],
        desc: "Brand denim lokal dengan potensi pertumbuhan tinggi.",
        nilai: "Rp 210Jt",
        return: "3-5%/bulan (6 bulan)"
    },
    {
        name: "POLARIS Konstruksi (Kalbe Farma)",
        tags: ["Konstruksi", "Healthcare"],
        desc: "Proyek konstruksi untuk divisi healthcare Kalbe Farma.",
        nilai: "Rp 500Jt",
        return: "5% (2.5 bulan)"
    },
    {
        name: "Fiber Optic (Huawei)",
        tags: ["Telekomunikasi", "Infrastruktur"],
        desc: "Proyek infrastruktur telekomunikasi Fiber Optic.",
        nilai: "10 Juta USD",
        return: "Sesuai skema"
    }
];

export default function Portfolio() {
    return (
        <div className={styles.portfolioPage}>
            <section className={styles.heroBanner}>
                <div className={`container ${styles.bannerContainer}`}>
                    <div>
                        <h5 className={styles.eyebrow}>PROYEK AKTIF</h5>
                        <h1 className={styles.title}>Pipeline Proyek Bara Capital</h1>
                        <p className={styles.subtitle}>
                            Berikut beberapa proyek yang sedang dalam proses seleksi atau sudah 
                            mendapat pembiayaan dari Bara Capital. Investasi dimulai dari 
                            Rp 500 Juta hingga Rp 2 Miliar per proyek.
                        </p>
                    </div>
                </div>
            </section>

            <div className={`container ${styles.mainContent}`}>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <h3>{projects.length}</h3>
                        <p>Proyek Aktif</p>
                    </div>
                    <div className={styles.statItem}>
                        <h3>12</h3>
                        <p>Total Pipeline</p>
                    </div>
                    <div className={styles.statItem}>
                        <h3>Rp 500Jt - 2M</h3>
                        <p>Rentang Nilai</p>
                    </div>
                </div>

                <section className={styles.listings}>
                    <div className={styles.listHeader}>
                        <h2>Daftar Proyek</h2>
                    </div>
                    <div className={styles.projectList}>
                        {projects.map((project, index) => (
                            <div key={index} className={styles.projectCard}>
                                <div className={styles.projectInfo}>
                                    <h3>{project.name}</h3>
                                    <p className={styles.desc}>{project.desc}</p>
                                    <div className={styles.meta}>
                                        <span className={styles.nilai}>
                                            <strong>Nilai:</strong> {project.nilai}
                                        </span>
                                        <span className={styles.returnRate}>
                                            <strong>Est. Return:</strong> {project.return}
                                        </span>
                                    </div>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
