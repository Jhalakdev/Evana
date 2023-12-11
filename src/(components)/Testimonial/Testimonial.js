'use client'
import { useEffect, useLayoutEffect } from 'react'
import testcss from './Testimonial.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function Testimonial() {

    useLayoutEffect(function () {

        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`#sec`, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                scroller: 'body',
                trigger: `#sec`,
                start: 'top 60%',
            }
        })
    })


    useEffect(function () {
        var cardArray = document.querySelectorAll(`.${testcss.card}`);
        var active = document.querySelector(`.${testcss.active}`);
        var selectorAll = document.querySelectorAll(`.${testcss.selector}`)
        var activeSelector = document.querySelector(`.${testcss.activeSelector}`);
        var num = active.getAttribute('num');
        setInterval(() => {

            cardArray[num].classList.remove(`${testcss.active}`);
            selectorAll[num].classList.remove(`${testcss.activeSelector}`)
            num = (num + 1) % cardArray.length;

            // console.log(num);
            cardArray[num].classList.add(`${testcss.active}`);
            selectorAll[num].classList.add(`${testcss.activeSelector}`);
        }, 5000);
        // selectorAll.forEach(function (selector, index) {
        //     selector.addEventListener('click', function () {
        //         var activeSelector = document.querySelector(`.${testcss.activeSelector}`);
        //         num = activeSelector.getAttribute('num');
        //         activeSelector.classList.remove(`${testcss.activeSelector}`)
        //         // num = (num + 1) % selectorAll.length;
        //         selectorAll[index].classList.add(`${testcss.activeSelector}`)
        //         console.log(activeSelector);
        //     })
        // })
    })
    return (<section id='sec' className={testcss.section}>
        <div className={testcss.left}></div>
        <div className={testcss.right}></div>
        <div className={testcss.wrapper}>
            <div className={testcss.text}>
                <span>READ TESTIMONIALS</span>
                <h2>Evana Infratech, a unit of K D Groups provides all construction-related stuffs under one roof. The company takes care of all the steps of construction starting from basic architectural designs to the stage of finishing. We provide ready-to-move buildings built up of best quality construction materials at budget-friendly expenses. With Evana Infratech, you just need to look after the finances and rest the stress falls on the company.</h2>
            </div>
            <div className={testcss.carousel}>
                <div className={testcss.cards}>

                    <div num='0' className={testcss.card + ' ' + testcss.active} style={{ '--i': 1 }} >

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VSEvnnljxnc?si=refkGBPTOxfvcYPu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                        <div>
                            <p>Exceptional craftsmanship, timely completion, and attention to detail - our experience with Evana Infratech exceeded our expectations. Their team demonstrated professionalism, reliability, and a commitment to quality throughout the entire project. We highly recommend them for any construction needs.</p>
                            <h2>Sagar Jha</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>
                    <div num='1' className={testcss.card} style={{ '--i': 2 }}>

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VSEvnnljxnc?si=refkGBPTOxfvcYPu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                        <div>
                            <p>Choosing Evana Infratech was a game-changer for our project. Their expertise and collaborative approach made the construction process seamless. From concept to completion, the team displayed unmatched skill, turning our vision into a stunning reality. Trustworthy, efficient, and results-driven - they are our go-to construction partner</p>
                            <h2>Mayank Tripathi</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>
                    <div num='2' className={testcss.card} style={{ '--i': 3 }}>

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VSEvnnljxnc?si=refkGBPTOxfvcYPu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                        <div>
                            <p>Kudos to Evana Infratech for their impeccable work on our recent project. The team&apos;s dedication to excellence was evident in every aspect - from project management to the finest details of craftsmanship. Their commitment to timelines and transparent communication set them apart. We&apos;re delighted with the results and would gladly recommend them for any construction endeavor.</p>
                            <h2>Virat Mhaske</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>
                    <div num='3' className={testcss.card} style={{ '--i': 4 }}>

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VSEvnnljxnc?si=refkGBPTOxfvcYPu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                        <div>
                            <p>Evana Infratech went above and beyond in transforming our vision into a functional and aesthetically pleasing reality. Their skilled team seamlessly blended creativity with precision, delivering a construction project that exceeded our expectations. Transparent communication and a customer-centric approach made the entire process enjoyable. We&apos;re grateful for their expertise and would choose them again without hesitation.</p>
                            <h2>Priyanka Agarwal</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>
                    <div num='4' className={testcss.card} style={{ '--i': 5 }}>

                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VSEvnnljxnc?si=refkGBPTOxfvcYPu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                        <div>
                            <p>Working with Evana Infratech was a true pleasure. Their dedication to client satisfaction is unmatched. The team consistently demonstrated professionalism, innovation, and a commitment to delivering on time and within budget. From initial consultation to project completion, Evana Infratech proved to be reliable partners in creating a space that reflects our vision and exceeds our expectations. Highly recommended for their top-notch construction services.</p>
                            <h2>Altaf Hussain</h2>
                            <span>GUESTS</span>
                        </div>
                    </div>

                </div>
                <div className={testcss.slider}>
                    <div num="0" className={testcss.selector + ' ' + testcss.activeSelector}></div>
                    <div num="1" className={testcss.selector}></div>
                    <div num="2" className={testcss.selector}></div>
                    <div num="3" className={testcss.selector}></div>
                    <div num="4" className={testcss.selector}></div>
                </div>
            </div>

        </div>
    </section>)
}
