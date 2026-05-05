import styles from "./Team.module.css";

const team = [
    {
        name: "Wishnu Wijaya",
        role: "Komisaris Utama",
        desc: "Ketua Bid. Investasi HIPMI Jawa Barat"
    },
    {
        name: "Ibrahim Imaduddin Islam",
        role: "Komisaris",
        desc: "Ketua Umum BPC HIPMI Kota Bandung"
    },
    {
        name: "M. Mulki Nurhalim",
        role: "Direktur Utama",
        desc: "Anggota Bid. Investasi HIPMI Jawa Barat"
    },
    {
        name: "Aditya Galih Utama",
        role: "Directeur",
        desc: "Pakar Pembiayaan Skema Perbankan"
    },
    {
        name: "Muhammad Ihsan Akhirulsyah",
        role: "Directeur",
        desc: "Pakar Raise Fund & Investor Global"
    },
    {
        name: "Arya Shani Pradana",
        role: "Directeur",
        desc: "Ketua Bid. Investasi HIPMI Kota Bandung"
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
