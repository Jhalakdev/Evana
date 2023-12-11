import copycss from './Copyright.module.css'
export default function Copyright() {
    return <div className={copycss.copyright}>

        <div className={copycss.copyLeft}>
        </div>
        <div className={copycss.wrapper}>
            <p>Copyright @2023 - <a href='http://webaccuracy.com' target='blank'>Designed by Web Accuracy</a></p>
        </div>
    </div>
}