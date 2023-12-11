'use client'
import pagecss from './page.module.css'
import LocoScroll from '../(utils)/LocomotiveScroll'
import { Accordion, Copyright, Footer, Hero, LatestProjects, Navbar, Section2, Section3, Services, Testimonial } from '@/(components)';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
export default function Page() {
  LocoScroll(true);

  return (<main className={pagecss.main} data-scroll data-scroll-container>
    <div className={pagecss.pageWrapper}>

      <Navbar />
      <Hero />
      <Section2 />
      <Services showMoreButton={true}/>
      <Section3 />
      <LatestProjects />
      <Testimonial />
      <Accordion />
      <Footer />
      <Copyright />
    </div>
  </main>)
}