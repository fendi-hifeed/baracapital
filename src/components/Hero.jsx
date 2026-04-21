import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <h1 className="animate-fade-in">We invest in the world&apos;s potential</h1>
                <p className={`animate-fade-in ${styles.subtitle}`}>
                    Bara Capital is an investment firm focused on globally ambitious founders building
                    fast-growing companies. We provide the capital, ecosystem, and mentorship to
                    propel startups and unlock long-term value.
                </p>
            </div>
            <div className={styles.fadeBottom}></div>
        </section>
    );
}
