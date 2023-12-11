'use client'
import Link from 'next/link'
import acss from './Accordian.module.css'
import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import data from '../datas/FAQListData'
export default function Accordion() {
    // useEffect(function () {
    //     var cards = document.querySelectorAll(`.${acss.card}`);
    //     cards.forEach(function (card) {
    //         card.addEventListener('click', function (e) {
    //             var p = card.childNodes[1].childNodes[1];
    //             p.classList.toggle(`${acss.active}`);
    //             console.log(p);

    //         })
    //     })

    // }, [])
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(`.${acss.card}`, {
            stagger: 0.03,
            opacity: 1,
            y: 0,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${acss.section}`,
                start: 'top 60%'
            }
        })
    })
    function toggleAccordion(index) {
        var content = document.getElementById("content" + index);
        // console.log(content);
        var arrow = document.getElementById("arrow" + index);

        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.style.transform = 'rotate(0deg)';
        } else {
            content.style.display = "block";
            arrow.style.transform = 'rotate(90deg)';
        }
    }
    return <section className={acss.section}>
        <div className={acss.wrapper}>
            <div className={acss.accordian}>
                <h2>Frequently Asked Questions about Evana Infratech</h2>
                <div className={acss.card} onClick={() => toggleAccordion(1)}>
                    <div className={acss.arrow} id='arrow1'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>{data[0].question}</p>
                        <p id="content1">{data[0].answer}</p>
                    </div>
                </div>
                <div className={acss.card} onClick={() => toggleAccordion(2)}>
                    <div className={acss.arrow} id='arrow2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>{data[1].question}</p>
                        <p id='content2'>{data[1].answer}</p>
                    </div>
                </div>
                <div className={acss.card} onClick={() => toggleAccordion(3)}>
                    <div className={acss.arrow} id='arrow3'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>{data[2].question}</p>
                        <p id='content3'>{data[2].answer}</p>
                    </div>
                </div>
                <div className={acss.card} onClick={() => toggleAccordion(4)}>
                    <div className={acss.arrow} id='arrow4'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>{data[3].question}</p>
                        <p id='content4'>{data[3].answer}</p>
                    </div>
                </div>
                <div className={acss.card} onClick={() => toggleAccordion(5)}>
                    <div className={acss.arrow} id='arrow5'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>{data[4].question}</p>
                        <p id='content5'>{data[4].answer}</p>
                    </div>
                </div>

            </div>
            <Link href={'/faqs'}><button>More FAQs</button></Link>
        </div>
    </section>
}