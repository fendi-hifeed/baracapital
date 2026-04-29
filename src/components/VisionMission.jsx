import styles from "./VisionMission.module.css";

export default function VisionMission() {
    return (
        <section id="visi-misi" className={`section ${styles.vmSection}`}>
            <div className={`container ${styles.vmContainer}`}>
                <div className={styles.vision}>
                    <h2>Visi Kami</h2>
                    <p>
                        Menjadi platform investasi dan pembiayaan terkemuka di Indonesia yang 
                        memberdayakan pengusaha muda untuk naik kelas melalui akses modal berkelanjutan.
                    </p>
                </div>
                
                <div className={styles.mission}>
                    <h2>Misi Kami</h2>
                    <ul>
                        <li>Memfasilitasi akses pembiayaan bagi pengusaha HIPMI se-Jawa Barat</li>
                        <li>Menyediakan skema pendanaan fleksibel sesuai kebutuhan bisnis</li>
                        <li>Menerapkan standar KYC & due diligence yang ketat</li>
                        <li>Membangun ekosistem bisnis yang saling menguntungkan</li>
                        <li>Membuka akses investasi profesional kepada publik secara bertahap</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
