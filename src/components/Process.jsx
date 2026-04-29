import styles from "./Process.module.css";

const steps = [
    { num: "1", title: "Pengajuan Proyek", desc: "Pengusaha muda mengajukan proposal bisnis mereka" },
    { num: "2", title: "Pengumpulan Dokumen KYC", desc: "Menyiapkan 12 dokumen sesuai persyaratan" },
    { num: "3", title: "Review Komite", desc: "Scoring & analisis oleh 4 Direksi Bara Capital" },
    { num: "4", title: "Keputusan Investasi", desc: "Hasil scoring menentukan persetujuan pendanaan" },
    { num: "5", title: "Eksekusi & Monitoring", desc: "Pencairan dana dan pemantauan berkala" }
];

export default function Process() {
    return (
        <section className={`section ${styles.processSection}`}>
            <div className={`container ${styles.processContainer}`}>
                <div className={styles.header}>
                    <h2>Proses Seleksi Proyek</h2>
                    <p>
                        Tim kami menerapkan proses seleksi yang ketat untuk memastikan setiap 
                        proyek memenuhi standar legal, manajemen, dan keuangan.
                    </p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, i) => (
                        <div key={i} className={styles.step}>
                            <div className={styles.stepNum}>{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            {i < steps.length - 1 && <div className={styles.connector}></div>}
                        </div>
                    ))}
                </div>

                <div className={styles.docsRequired}>
                    <h3>12 Dokumen KYC yang Dibutuhkan:</h3>
                    <div className={styles.docList}>
                        <span>Akta Pendirian & Perubahan</span>
                        <span>SK Pengesahan</span>
                        <span>NPWP Perusahaan</span>
                        <span>NIB</span>
                        <span>Surat Kuasa Bertransaksi</span>
                        <span>KTP & No. HP (Dirut & Operator)</span>
                        <span>Rekening Koran 3 Bulan</span>
                        <span>Laporan Keuangan Audited</span>
                        <span>Laporan Keuangan Manajemen</span>
                        <span>Daftar Piutang</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
