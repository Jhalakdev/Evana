'use client'
import { Copyright, CustomHero, Footer, Navbar, Section3, Testimonial } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll";
import { Content, OurTeam, Section2 } from "./(components)";

export default function About() {
    LocoScroll(true);
    return <main data-scroll data-scroll-container>
        <Navbar />
        <CustomHero h1={" > ABOUT US >"} p={"ABOUT US"} imgSrc={'/Construction.jpg'} />
        <Section2 />
        {/* <Content /> */}
        <Section3 />
        <OurTeam />
        <Testimonial />
        <Footer />
        <Copyright />
    </main>
}