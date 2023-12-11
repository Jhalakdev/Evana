import { Sec2About, Sec2Ad, Sec2Cards } from '@/(components)'
import sec2css from './Section2.module.css'
export default function Section2() {
    return <section className={sec2css.section}>
        <div className={sec2css.wrapper}>
            <Sec2About />
            <Sec2Ad />
        </div>
    </section>
}