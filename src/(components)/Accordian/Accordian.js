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

                        <p>1. What exactly does Evana Infratech do?</p>
                        <p id="content1">Evana Infratech is basically a stop solution for all your construction-related needs. For example, say you have purchased land and now you want to construct any type of building over it like a House, bungalow, Hospital, mall, etc. Evana Infratech will construct every inch of your building and will hand over the key to you. </p>
                    </div>
                </div>
                <div className={acss.card} onClick={() => toggleAccordion(2)}>
                    <div className={acss.arrow} id='arrow2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>2. Which types of material does Evana Infratech use?</p>
                        <p id='content2'>We have different packages based on material selection. We can use any material based on your choices and preferences. We give you a standard quotation, where we mention all the materials and brands. For example, steel of Tata, Cement of ACC, paint of Asian, etc. However, clients have the liberty to choose materials and brands of their choice.</p>
                    </div>
                </div>
                <div className={acss.card} onClick={() => toggleAccordion(3)}>
                    <div className={acss.arrow} id='arrow3'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>3. What will be the total cost of my building construction?</p>
                        <p id='content3'>The cost of any building can be precisely calculated only after analysis of drawings and the requirements of the client. However, on a very broad basis, the rate varies from Rs 1600 per square feet to Rs 2000 per Square feet. Rates can even be higher depending upon different permutations and combinations. Refer to the package session for more information.</p>
                    </div>
                </div>
                <div className={acss.card} onClick={() => toggleAccordion(4)}>
                    <div className={acss.arrow} id='arrow4'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>4. How cost of the building is calculated?</p>
                        <p id='content4'>The total cost of the building is calculated from the casted slab. For example, if the quoted rate is Rs 1700 per square feet and the total slab of the building is 1000 Square Feet then the final rate of the building shall be Rs 1700000 plus additional charges.</p>
                    </div>
                </div>
                <div className={acss.card} onClick={() => toggleAccordion(5)}>
                    <div className={acss.arrow} id='arrow5'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </div>
                    <div className={acss.ps}>

                        <p>5. What are additional/extra charges?</p>
                        <p id='content5'>Some parts of the buildings have variations depending upon multiple factors like soil conditions, types of facade, boundary walls, etc. In a crude sense, any structure of the building that is outside the slab of the building taken for calculation is taken under the head of additional cost. As of today, some items under extra costs are soil filing, mumty slab, landscaping, boundary wall with gate, any structure outside the slab, any materials used in the facade other than concrete, cement and paint.</p>
                    </div>
                </div>

            </div>
            <Link href={'/faqs'}><button>More FAQs</button></Link>
        </div>
    </section>
}