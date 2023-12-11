'use client'
import { Copyright, CustomHero, Footer, LatestProjects, Navbar, Process } from "@/(components)";
import LocoScroll from "@/(utils)/LocomotiveScroll"
export default function Page() {
    LocoScroll(true);
    return <main data-scroll data-scroll-container>
        <Navbar />
        <CustomHero h1={" > PROCESS >"} p={"PROCESS"} imgSrc={'/ConstructionAbout.png'} />
        <Process />
        <Footer />
        <Copyright />
    </main>
}