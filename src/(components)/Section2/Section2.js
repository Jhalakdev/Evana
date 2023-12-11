'use client'
import Sec2About from '../Sec2About/Sec2About'
import Sec2Ad from '../Sec2Ad/Sec2Ad'
import Sec2Cards from '../Sec2Cards/Sec2cards'
import sec2css from './Section2.module.css'
export default function Section2() {
    return <section className={sec2css.section}>
        <div className={sec2css.wrapper}>
            <Sec2Cards />
            <Sec2About />
            <Sec2Ad />
        </div>
    </section>
}