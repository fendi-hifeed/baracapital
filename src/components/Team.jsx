import styles from "./Team.module.css";

const team = [
    {
        name: "M. Mulki Nurhalim S.T., S.M., M.M.",
        role: "Directeur Utama",
        desc: "Linear academic & professional record in e-commerce & global supply chain | Co-Founder PT Modero Integra Asia | Founder & Directeur PT Primemoda Trend Asia | Co-Founder & Directeur PT Trend Wave Studio"
    },
    {
        name: "Aditya Galih Utama BS., MBA.",
        role: "Directeur",
        desc: "MBA Business Strategy SBM ITB | Real Estate Development & Investment UI | Strategic Partnership Associate Temasek Foundation Singapore | Founder & Director PT Agrikultura Investama Sedaya | Commissioner PT Balai Lelang Murakapi & PT Agro Lestari Merbabu"
    },
    {
        name: "Arya Shani Pradhana",
        role: "Directeur",
        desc: "BA (Hons) Business Administration International Business, University of East London | Founder & CEO PT Kantor Tekape Indonesia | Co-Founder & CEO PT Sinergi Entertainment Indonesia"
    },
    {
        name: "Ibrahim Imaduddin Islam S.M.B, M.B.A",
        role: "Komisaris",
        desc: "MBA in Creative & Cultural Entrepreneurship | Founder & CEO Mavens Studio | Chairman HIPMI Kota Bandung | Ketua Bidang Investasi BPD HIPMI Jawa Barat 2025-2028 | Pengusaha Digital Media Services"
    }
];

function getInitials(name) {
    const parts = name.split(" ");
    if (parts.length >= 2) {
        return parts[0][0] + parts[1][0];
    }
    return name.substring(0, 2);
}

export default function Team() {
    return (
        <section id="tim" className={`section ${styles.teamSection}`}>
            <div className={`container ${styles.teamContainer}`}>
                <div className={styles.header}>
                    <h2>Tim Manajemen</h2>
                    <p>
                        Tim kami terdiri dari para profesional berpengalaman di bidang investasi,
                        perbankan, dan ekosistem bisnis Jawa Barat.
                    </p>
                </div>

                <div className={styles.grid}>
                    {team.map(function(member, i) {
                        return (
                            <div key={i} className={styles.card}>
                                <div className={styles.avatar}>
                                    {getInitials(member.name)}
                                </div>
                                <h3>{member.name}</h3>
                                <p className={styles.role}>{member.role}</p>
                                <p className={styles.desc}>{member.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}