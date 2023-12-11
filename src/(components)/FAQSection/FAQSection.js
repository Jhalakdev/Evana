'use client'
import { useLayoutEffect } from 'react'
import CreateFAQs from '../utils/CreateFAQs'
import faqcss from './FAQ.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function FAQSection() {
    useLayoutEffect(function () {

        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`.${faqcss.wrapper} h1`, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${faqcss.section}`,
                start: 'top 60%',
                // markers:true,
            }
        })
        gsap.to(`.${faqcss.listContainer} ol li`, {
            opacity: 1,
            stagger: 0.05,
            y: 0,
            delay: 0.25,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${faqcss.section}`,
                start: 'top 60%',
            }
        })
    })
    return <section className={faqcss.section}>
        <div className={faqcss.wrapper}>
            <h1>Frequently Asked Questions</h1>
            <div className={faqcss.listContainer}>
                <ol>
                    {CreateFAQs()}
                </ol>
            </div>
        </div>
    </section>
}