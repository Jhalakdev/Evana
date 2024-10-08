'use client'
import { useLayoutEffect } from 'react'
import latestcss from './LatestProject.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function LatestProjects() {
    useLayoutEffect(function () {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`.${latestcss.text}`, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${latestcss.latestProjectSection}`,
                start: 'top 60%',
            }
        })
        gsap.to(`.${latestcss.project}`, {
            opacity: 1,
            stagger: 0.05,
            y: 0,
            delay: 0.25,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${latestcss.latestProjectSection}`,
                start: 'top 60%',
            }
        })
    })
    return <div className={latestcss.latestProjectSection}>
        <div className={latestcss.latestProjectWrapper}>
            <div className={latestcss.text}>
                <h2>Latest Projects</h2>
            </div>
            <div className={latestcss.projects}>
                <div className={latestcss.project}>
                    <img src='/Project1.jpg' />
                    <div className={latestcss.projectInfo}>
                        <span>Building</span>
                        <h2>Hospital Project</h2>
                    </div>
                </div>
                <div className={latestcss.project}>
                    <img src='/Project2.jpg' />
                    <div className={latestcss.projectInfo}>
                        <span>Building</span>
                        <h2>Residential Project</h2>
                    </div>
                </div>
                <div className={latestcss.project}>
                    <img src='/Project3.jpg' />
                    <div className={latestcss.projectInfo}>
                        <span>Building</span>
                        <h2>Residential Building</h2>
                    </div>
                </div>
                <div className={latestcss.project}>
                    <img src='/Project4.jpg' />
                    <div className={latestcss.projectInfo}>
                        <span>Commercial</span>
                        <h2>Residential Building</h2>
                    </div>
                </div>
                <div className={latestcss.project}>
                    <img src='/Project5.jpg' />
                    <div className={latestcss.projectInfo}>
                        <span>Building</span>
                        <h2>Residential Building</h2>
                    </div>
                </div>
                <div className={latestcss.project}>
                    <img src='/Project6.jpg' />
                    <div className={latestcss.projectInfo}>
                        <span>Building</span>
                        <h2>Residential Building</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
}