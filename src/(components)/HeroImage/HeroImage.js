import herocss from '../HeroSection/Hero.module.css'
export default function HeroImage({  imgsrc, ...props }) {
    return <div className={herocss.heroBackground}>
        <img  data-scroll data-scroll-speed='-0.5' src={imgsrc || '/HeroBackgroundImage.png'} />
    </div>
}