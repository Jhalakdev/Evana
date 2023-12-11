'use client'
import { Copyright, CustomHero, FAQSection, Footer, Navbar } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll"

export default function FAQS() {
    LocoScroll(true);
    return <main data-scroll data-scroll-container>
        <Navbar />
        <CustomHero h1={' > FAQs >'} p={'FAQs'} />
        <FAQSection/>
        <Footer/>
        <Copyright/>
    </main>
}