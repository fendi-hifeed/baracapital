import styles from "./Stats.module.css";

const stats = [
    { label: "in AUM*", value: "$2.3B" },
    { label: "cumulative portfolio valuation", value: "$300B+" },
    { label: "startups backed", value: "3,000+" },
    { label: "companies valued at $1B+", value: "35+" }
];

export default function Stats() {
    return (
        <section className={`section ${styles.statsSection}`}>
            <div className={`container ${styles.statsContainer}`}>
                <div className={styles.header}>
                    <h2>Putting performance to work</h2>
                    <p>
                        We drive sustainable innovation and growth locally and globally by fostering
                        communities of entrepreneurs, investors, mentors, and operators.
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
            <div className="container" style={{ paddingTop: '2rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                <p>* As of latest quarter estimates. For illustrative purposes.</p>
            </div>
        </section>
    );
}
