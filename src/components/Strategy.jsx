import styles from "./Strategy.module.css";

const strategies = [
    {
        title: "Flagship Strategy",
        type: "FOR INVESTORS",
        tag: "US/Global"
    },
    {
        title: "Flagship Accelerator",
        type: "FOR FOUNDERS",
        tag: "US/Global"
    },
    {
        title: "VC Unlocked: Sandbox",
        type: "PROGRAM",
        tag: "Global"
    },
    {
        title: "Sustainable Growth",
        type: "FOR ENABLERS",
        tag: "Global"
    }
];

export default function Strategy() {
    return (
        <section className={`section ${styles.strategySection}`}>
            <div className={`container ${styles.strategyContainer}`}>
                <div className={styles.intro}>
                    <h2>Talent lives everywhere.<br />Capital and opportunity does not.</h2>
                    <p>
                        We invest in founders and empower investors with a global mindset across sectors,
                        geographies, and markets where our capital, global networks, and resources can unlock
                        their potential to drive uncommon outcomes.
                    </p>
                </div>

                <div className={styles.cardList}>
                    {strategies.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.tag}>{item.tag}</span>
                                <span className={styles.type}>{item.type}</span>
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
