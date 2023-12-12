'use client'
import { useEffect, useLayoutEffect } from 'react'
import sec3css from './Section3.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Noto_Serif_Tibetan } from 'next/font/google'
export default function Section3() {
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`.${sec3css.banner}`, {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${sec3css.section}`,
                start: 'top 60%',
            },
            onComplete:
                function () {
                    var proc = document.querySelector('#proc');
                    var hapc = document.querySelector('#hapc');
                    var datahapc = hapc.getAttribute('data')
                    var data = proc.getAttribute('data')
                    var insidehapc = Number(hapc.innerHTML);
                    var inside = Number(proc.innerHTML);
                    setInterval(function () {
                        if (inside === data) {
                            clearInterval();
                        }
                        if (inside < data) {
                            inside = inside + 20;
                        }
                        else {
                            inside = data;
                        }
                        proc.innerHTML = inside + '+';

                    }, 100)
                    setInterval(function () {
                        if (insidehapc === datahapc) {
                            clearInterval();
                        }
                        if (insidehapc < datahapc) {
                            insidehapc = insidehapc + 20;
                        }
                        else {
                            insidehapc = datahapc;
                        }
                        if (insidehapc > 1000) {
                            if (insidehapc % 1000 === 0) {
                                hapc.innerHTML = Math.floor(insidehapc / 1000) + ',000';
                            }
                            else {

                                hapc.innerHTML = Math.floor(insidehapc / 1000) + ',' + insidehapc % 1000 + '+';
                            }
                        }
                        else {
                            hapc.innerHTML = insidehapc + '+';
                        }

                    }, 100)
                }

        })
    })
    return <section className={sec3css.section}>
        <div className={sec3css.secLeft}></div>
        <div className={sec3css.secRight}></div>
        <div className={sec3css.wrapper}>
            <div className={sec3css.text}>
                <span>EAVANA INFRATECH A CONSTRUCTION COMPANY</span>
                <h2>Best Provider for Construction Services</h2>
                {/* <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span> */}
                {/* <p>Evana Infratech was founded with the noble motive of providing the best construction services at affordable prices to clients. The company has completed hundreds of projects in multiple fields of construction. It’s a one-stop solution for all your construction-related needs. The company is led by a group of enthusiasts and professionals, who deliver the best of services. */}
                <p>
                    Evana Infratech, a unit of K D Groups specializes in delivering innovative and sustainable building solutions tailored to meet diverse project needs.
                </p>
            </div>
            <div className={sec3css.banners}>
                <div className={sec3css.banner}>
                    <img src='/Construction.jpg' />
                    <div>
                        <h2 id='proc' data='100' >0</h2>
                        <p>PROJECT COMPLETED</p>
                    </div>
                </div>
                <div className={sec3css.banner}>
                    <img src='/family.jpg' />
                    <div>
                        <h2 id='hapc' data='100'>0</h2>
                        <p>HAPPY CUSTOMERS</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}