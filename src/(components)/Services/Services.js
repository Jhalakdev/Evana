'use client'
import { useLayoutEffect } from 'react'
import data from '../datas/ServiceListHome'
import createServiceCard from '../utils/CreateServiceCard'
import servicecss from './Services.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
export default function Services({ mappingdata, showMoreButton, ...props }) {

    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`.${servicecss.text}`, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${servicecss.serviceSection}`,
                start: 'top 60%',
            }
        })
        gsap.to(`.${servicecss.service}`, {
            opacity: 1,
            stagger: 0.05,
            y: 0,
            delay: 0.25,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${servicecss.serviceSection}`,
                start: 'top 60%',
            }
        })
    })
    return (<section className={servicecss.serviceSection}>
        <div className={servicecss.serviceBackground}></div>
        <div className={servicecss.serviceWrapper}>
            <div className={servicecss.text}>
                <p>OUR SERVICES</p>
                <h2>We Offer Services</h2>
            </div>
            <div className={servicecss.services}>
                {mappingdata && mappingdata.map(function (dataitem) {
                    return createServiceCard(dataitem)
                })}
                {!mappingdata && data.map(function (dataitem) {
                    return createServiceCard(dataitem)
                })}
            </div>
            {showMoreButton &&
                <Link href={'/services'}><button>SHOW MORE</button></Link>
            }
        </div>
    </section>)
}