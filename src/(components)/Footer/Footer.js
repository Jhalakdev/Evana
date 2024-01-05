import cdata from '../datas/Contact'
import Link from 'next/link'
import footercss from './Footer.module.css'
export default function Footer() {
    return <footer className={footercss.footer}>
        <div className={footercss.footerWrapper}>
            <div className={footercss.footerList}>
                <h2>ABOUT</h2>
                <p>Evana Infratech is one stop solution for complete construction with materials</p>
                <div className={footercss.socials}>
                    <Link href={cdata.facebook} target='blank'>
                        <div className={footercss.svgContainer}>

                            <svg height="16" width="10" fill='#FC5E28' viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                        </div>
                    </Link>

                    <Link href={cdata.instagram} target='blank'>
                        <div className={footercss.svgContainer}>

                            <svg fill='#FC5E28' height="16" width="14" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </div>
                    </Link>
                    <Link href={cdata.youtube} target='blank'>
                        <div className={footercss.svgContainer}>

                            <svg fill='var(--red)' xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>                            </div>
                    </Link>
                </div>
            </div>
            <div className={footercss.footerList}>
                <h2>LINKS</h2>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About Us</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/process'>Process</Link></li>
                    <li><Link href='/faqs'>FAQs</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    {/* <li><Link>PROJECT</Link></li>
                    <li><Link>PROJECT</Link></li>
                    <li><Link>PROJECT</Link></li> */}

                </ul>
            </div>

            <div className={footercss.footerList}>
                <h2>HAVE A QUESTION?</h2>
                <p><strong style={{ color: 'var(--red)' }}>Ranchi:</strong> Office 2nd Floor, Madhushree Heights, Beside Central Bank, Near Meenakshi Netralaya, Harmu - 834002</p>
                <p><strong style={{ color: 'var(--red)' }}>Pune:</strong> Office no.107, Ganesh Imperia, Opp. Omega Paradise SocietyY, Wakad - 411057</p>
                <p style={{ color: 'var(--red)' }}>+91 7070333178</p>
                <p style={{ color: 'var(--red)' }}>+91 8605183887</p>
                <p><strong style={{ color: 'var(--red)' }}>Email:</strong> evanainfratech@gmail.com</p>
            </div>
        </div>
    </footer>
}