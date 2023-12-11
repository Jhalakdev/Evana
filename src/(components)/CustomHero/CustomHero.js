// import HeroImage from '../HeroImage/HeroImage'
import { HeroImage } from '@/(components)'
import herocss from './Hero.module.css'
import Link from 'next/link'
export default function CustomHero({ p, h1, imgSrc, ...props }) {
    const data = {
        p: "HERO > ABOUT US >",
        h1: "ABOUT US",
    }
    return (<section className={herocss.heroSection}>
        <div className={herocss.heroWrapper}>
            <div className={herocss.heroText}>
                {/* <h1>WE BUILD GREAT PROJECTS</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                <div>
                    <button>OUR SERVICES</button>
                    <button>REQUEST A QUOTE</button>
                </div> */}
                <p>{p}</p>
                <h1><Link href='/'>HOME</Link>{h1}</h1>
            </div>
        </div>
        <HeroImage imgsrc={imgSrc || '/ConstructionAbout.png'} />
    </section>)
}