import styles from "./Strategy.module.css";

const strategies = [
    {
        title: "Debt Financing",
        type: "PINJAMAN BERBUNGA",
        desc: "Berbasis utang dengan bunga kompetitif untuk bisnis dengan arus kas stabil.",
        icon: "💰"
    },
    {
        title: "Equity",
        type: "KEPEMILIKAN SAHAM",
        desc: "Investor mendapat porsi kepemilikan tanpa beban cicilan, cocok untuk startup.",
        icon: "📊"
    },
    {
        title: "Revenue Sharing",
        type: "BAGI PENDAPATAN",
        desc: "Imbal hasil berdasarkan persentase pendapatan, fleksibel mengikuti performa bisnis.",
        icon: "📈"
    },
    {
        title: "Syariah",
        type: "MUDAHARABAH/MUSYARAKAH",
        desc: "Berbasis bagi hasil sesuai prinsip Islam, bebas riba, dan transparan.",
        icon: "🤝"
    }
];

export default function Strategy() {
    return (
        <section id="skema" className={`section ${styles.strategySection}`}>
            <div className={`container ${styles.strategyContainer}`}>
                <div className={styles.intro}>
                    <h2>Skema Pembiayaan Fleksibel</h2>
                    <p>
                        Kami menyediakan berbagai pilihan skema pendanaan yang dapat disesuaikan 
                        dengan kebutuhan bisnis Anda, mulai dari Rp 500 Juta hingga Rp 2 Miliar per proyek.
                    </p>
                </div>

                <div className={styles.cardList}>
                    {strategies.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.cardIcon}>{item.icon}</div>
                            <div className={styles.cardHeader}>
                                <span className={styles.type}>{item.type}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
