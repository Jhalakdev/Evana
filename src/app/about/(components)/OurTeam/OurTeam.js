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

                        <h2>Ajay Sah<p>B.E(Civil), M.A., LLB, PGDHRL, UGC-NET</p></h2>
                        <span>Managing Director</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Rashmi-Sah.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Rashmi Sah <p>M.Sc</p></h2>
                        <span>Director</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Sanjay-Sah.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Sanjay Sah <p>BA, LLB, Diploma Cyber Law</p></h2>
                        <span>Legal Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Prashant-Kumar.HEIC' />
                    <div className={teamcss.cardText}>

                        <h2>Prashant Kumar <p>B.E.(Civil), M.Tech(Construction Management)</p></h2>
                        <span>Director Head, Bhagalpur Operations</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Miraz-Khan.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Miraz Khan <p>B.Tech(Civil)</p></h2>
                        <span>Technical & Engineering Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Brajesh-Roy.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Brajesh Roy <p>B.E.(Civil)</p></h2>
                        <span>Purchase & Engineering Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Nitin-Jha.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Nitin Jha<p>Diploma(Civil Engg)</p></h2>
                        <span>Operation & Management Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Wasim-Ansari.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Wasim Ansari<p>BA, Diploma(Computer Networking)</p></h2>
                        <span>Marketing & Sales Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Sanket-Suman.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Sanket Suman <p>B.Tech(Civil), Diploma(CAD)</p></h2>
                        <span>Planning & Designing Head</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Roshan-Sonu.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Roshan Sonu <p>M.A.(Geography)</p></h2>
                        <span>Field Marketing Manager</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Pramod-Bhanudas-Shelke.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Pramod Bhanudas Shelke <p>B.E.(Civil)</p></h2>
                        <span>Technical Head (Maharashtra)</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Pushkar-Durge.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Pushkar Durge <p>BA, LLB</p></h2>
                        <span>Legal Head (Maharashtra)</span>
                    </div>
                </div>
                <div className={teamcss.card}>
                    <img src='/Umang-Bansal.jpg' />
                    <div className={teamcss.cardText}>

                        <h2>Umang Bansal <p>B.Com</p></h2>
                        <span>Operational Head (Maharashtra)</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
}