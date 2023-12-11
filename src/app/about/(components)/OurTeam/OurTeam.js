import teamcss from './OurTeam.module.css'
export default function OurTeam() {
    return <section className={teamcss.section}>
        <div className={teamcss.wrapper}>
            <div className={teamcss.text}>
                <span>OUR CORE TEAM</span>
                <h2>Our Team</h2>
            </div>
            <div className={teamcss.cards}>
                <div className={teamcss.card}>
                    <img src='/Ajay-Sah.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Ajay Sah</h2>
                        <span>Managing Director</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Rashmi-Sah.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Rashmi Sah</h2>
                        <span>Director</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Sanjay-Sah.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Sanjay Sah</h2>
                        <span>Legal Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Miraz-Khan.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Miraz Khan</h2>
                        <span>Technical & Engineering Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Brajesh-Roy.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Brajesh Roy</h2>
                        <span>Purchase & Engineering Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Nitin-Jha.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Nitin Jha</h2>
                        <span>Operation & Management Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Wasim-Ansari.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Wasim Ansari</h2>
                        <span>Marketing & Sales Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Sanket-Suman.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Sanket Suman</h2>
                        <span>Planing & Designing Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Roshan-Sonu.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Roshan Sonu</h2>
                        <span>Field Marketing Manager</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
}