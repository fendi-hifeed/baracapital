import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

const dummyCompanies = [
    { name: "10k Science", tags: ["Pre-Seed", "United States"], desc: "" },
    { name: "15five", tags: ["Series C", "United States", "B2B"], desc: "Operator of a performance management platform intended to create effective..." },
    { name: "1huddle", tags: ["Series A", "United States", "B2B"], desc: "Developer of a game-based workforce training platform designed to onboard,..." },
    { name: "21 Market", tags: ["Pre-Seed", "Brazil"], desc: "Developer of an e-commerce platform designed to inspect electronic device..." },
    { name: "Canva", tags: ["Series E", "Australia", "Design"], desc: "Online design and publishing tool." },
    { name: "Solana", tags: ["Web3", "Global"], desc: "High-performance blockchain supporting builders." },
];

export default function Portfolio() {
    return (
        <div className={styles.portfolioPage}>
            <section className={styles.heroBanner}>
                <div className={`container ${styles.bannerContainer}`}>
                    <div>
                        <h5 className={styles.eyebrow}>PORTFOLIO</h5>
                        <h1 className={styles.title}>Turning global potential into performance</h1>
                        <p className={styles.subtitle}>
                            We invest across sectors, geographies and markets where capital and our unique global
                            networks and resources may unlock the potential of entrepreneurs to drive uncommon
                            outcomes.
                        </p>
                    </div>
                    <div className={styles.graphic}>
                        {/* Minimal SVG Graphic representing global circles similar to 500.co */}
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="100" cy="100" rx="30" ry="80" stroke="white" strokeWidth="1" />
                            <ellipse cx="100" cy="100" rx="50" ry="80" stroke="white" strokeWidth="1" />
                            <ellipse cx="100" cy="100" rx="70" ry="80" stroke="white" strokeWidth="1" />
                            <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" />
                        </svg>
                    </div>
                </div>
            </section>

            <div className={`container ${styles.mainContent}`}>
                <aside className={styles.sidebar}>
                    <div className={styles.filterGroup}>
                        <h3>Industries</h3>
                        <ul>
                            <li><input type="checkbox" checked readOnly /> All <span>2226</span></li>
                            <li><input type="checkbox" /> 3D Printing <span>2</span></li>
                            <li><input type="checkbox" /> AI/Machine Learning <span>131</span></li>
                            <li><input type="checkbox" /> Accounting <span>9</span></li>
                        </ul>
                        <button className={styles.clearBtn}>Clear filters</button>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Regions</h3>
                        <ul>
                            <li><input type="checkbox" checked readOnly /> All <span>2226</span></li>
                            <li><input type="checkbox" /> Africa <span>19</span></li>
                            <li><input type="checkbox" /> Americas - United States <span>1</span></li>
                        </ul>
                        <button className={styles.clearBtn}>Clear filters</button>
                    </div>
                </aside>

                <section className={styles.listings}>
                    <div className={styles.listHeader}>
                        <h2>Portfolio Companies</h2>
                    </div>
                    <div className={styles.companyList}>
                        {dummyCompanies.map((company, index) => (
                            <div key={index} className={styles.companyCard}>
                                <div className={styles.companyInfo}>
                                    <h3>{company.name}</h3>
                                    {company.desc && <p className={styles.desc}>{company.desc} <span>Show more</span></p>}
                                    <div className={styles.tags}>
                                        {company.tags.map((tag, i) => (
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
