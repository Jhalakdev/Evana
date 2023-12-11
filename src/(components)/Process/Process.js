'use client'
import Link from 'next/link'
import processcss from './Process.module.css'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function Process() {
    useLayoutEffect(function () {
        const info = document.querySelectorAll(`.${processcss.info} li`);
        console.log(info);
        gsap.registerPlugin(ScrollTrigger);

    })
    return <section className={processcss.section}>
        <div className={processcss.wrapper}>
            <Link href={'/process'}><div className={processcss.scrollToTopButton}></div></Link>
            <div className={processcss.processnav}>
                <div className={processcss.navItems}>
                    <h2>Pre-Construction Phase</h2>
                    <div className={processcss.navSubItems}>
                        <a href={'#A1'}>
                            <div className={processcss.navitem}><h2>Acquire of Land/Plot</h2></div>
                        </a>
                        <a href={'#A2'}>
                            <div className={processcss.navitem}><h2>Get all legal obligations like mutation,holding,tax, etc</h2></div>
                        </a>
                        <a href={'#A3'}>
                            <div className={processcss.navitem}><h2>Preparation of rough estimate & plan</h2></div>
                        </a>
                        <a href={'#A4'}>
                            <div className={processcss.navitem}><h2>Preparation of floor plan and map</h2></div>
                        </a>
                        <a href={'#A5'}>
                            <div className={processcss.navitem}><h2>Permission from Authorities/Municipal</h2></div>
                        </a>
                    </div>
                </div>
                <div className={processcss.navItems}>
                    <h2>During Building Construction Phase</h2>
                    <div className={processcss.navSubItems}>

                        <a href={'#B1'}><div className={processcss.navitem}><h2>Site Clearance/Levelling Work</h2></div></a>
                        <a href={'#B2'}><div className={processcss.navitem}><h2>Excavation and PCC</h2></div></a>
                        <a href={'#B3'}><div className={processcss.navitem}><h2>Foundation Work</h2></div></a>
                        <a href={'#B4'}><div className={processcss.navitem}><h2>Plinth Beam/Slab</h2></div></a>
                        <a href={'#B5'}><div className={processcss.navitem}><h2>Superstructure-Column</h2></div></a>
                        <a href={'#B6'}><div className={processcss.navitem}><h2>Brick Masonry Work</h2></div></a>
                        <a href={'#B7'}><div className={processcss.navitem}><h2>The Lintel Over Door Window Gaps</h2></div></a>
                        <a href={'#B8'}><div className={processcss.navitem}><h2>Floor Slab/Roof Structure</h2></div></a>
                        <a href={'#B9'}><div className={processcss.navitem}><h2>Door Window Framing and Fixations</h2></div></a>
                        <a href={'#B10'}><div className={processcss.navitem}><h2>Electrical and Plumbing</h2></div></a>
                        <a href={'#B11'}><div className={processcss.navitem}><h2>Exterior Finishing</h2></div></a>
                        <a href={'#B12'}><div className={processcss.navitem}><h2>Terrace and Roof Finishing</h2></div></a>
                        <a href={'#B13'}><div className={processcss.navitem}><h2>Internal Finishes</h2></div></a>
                        <a href={'#B14'}><div className={processcss.navitem}><h2>Woodwork and Fixture Fittings</h2></div></a>
                        <a href={'#B15'}><div className={processcss.navitem}><h2>Waterproofing</h2></div></a>
                        <a href={'#B16'}><div className={processcss.navitem}><h2>Painting Work</h2></div></a>
                    </div>
                </div>
            </div>
            <div className={processcss.info}>
                <ul>
                    <h2>A. Pre-Construction Steps (Phase - I)</h2>
                    <li id='A1'>
                        <h2>1. To Acquire Land or Plot</h2>
                        <p>
                            It is the most important step in building construction. Search for the location of the building which is best suited for building construction purposes. It is highly recommended to take legal opinion before purchase of land. If you are searching land for commercial purpose, it&apos;s highly recommended to consult Architect, who has knowledge of local Municipal Laws.
                        </p>
                    </li>
                    <li id='A2'>
                        <h2>
                            2. To Seek Technical Help
                        </h2>
                        <p>

                            After selecting the proper land for the building, take the help of a professional architect to create building designs and take his advice.
                            An architect prepares a plan as per building requirements based on your requirements and budget. Then the architect consults a structural consultant for details of the RCC be used, depth of foundation, dimensions of beams and columns, steel enforcement of slab, etc.
                        </p>
                    </li>
                    <li id='A3'>
                        <h2>3. Preparation Estimate and Budget</h2>
                        <p>Building construction involves a huge amount of material and budget. After, planning and structural detailing have been completed these details are transferred to the cost estimator.
                            The building estimator will estimate the material quantity, and quantity of different items of work, and prepare an abstract sheet that shows the cost of building construction.
                            If financial resources are limited, we need to seek pre-approval for loans in advance.
                        </p>
                    </li>
                    <li id='A4'>
                        <h2>4. Permission from Municipal/Authorities</h2>
                        <p>This is important work to do after the project is ready to be executed. For that, we have to take permission from the local municipal body before you could go for the construction.</p>
                    </li>
                    <li id='A5'>
                        <h2>5. Approach a Builder/Civil Contractor</h2>
                        <p>A builder or civil contractor for construction must be chosen carefully because it is a major factor in securing building construction quality and timely construction of work. Pre-investigation must be done about the builder before handing in work. In the work agreement, the work-related details must be clearly stated. The contract document should cover layout and work details along with the payment methods, time scales, and costs. The condition of the agreement should be thoroughly checked before signing a final deal.
                        </p>
                    </li>
                    <h2>B. Building Construction Step (Phase - II)
                    </h2>
                    <li id='B1'>
                        <h2>1. Site Preparation or Leveling</h2>
                        <p>The site should be cleaned/levelled before the work is executed. This work involves the removal of trees, debris, and leveling the ground area. Few labourers are required for this job. For bigger lands, help of JCB can be taken.</p>
                    </li>
                    <li id='B2'>
                        <h2>2. Excavation and PCC</h2>
                        <p>The foundation of the building ground is excavated with the help of excavating machines as per the building dimension specified in the drawings. In this foundation trench, a layer of PCC (Plain cement concrete) is laid in the dug portion before placing the reinforcements for the foundation. This is most neglected part but yet the most important one. The PCC layer is base of entire foundation and hence proper care must be taken to give it good strength. </p>
                    </li>
                    <li id='B3'>
                        <h2>3. Foundation Work</h2>
                        <p>The building is supported on the foundation is the lowermost part of the building that is in contact with the soil. A building is a load transferred from the superstructure to the soil and needs to be extremely strong to handle the load. After the PCC work foundation reinforcement work is started. The foundation&apos;s bottom level must check before concreting it. The remaining space between the foundation is filled with earth.</p>
                    </li>
                    <li id='B4'>
                        <h2>4. Plinth Beam</h2>
                        <p>Plith beam is that structure above which the column lies. In simple words, it is interface between foundation and super structure.</p>
                    </li>
                    <li id='B5'>
                        <h2>5. Superstructure - Column</h2>
                        <p>The superstructure is the portion above the plinth level of the building. The main component of perstructure is a column and a beam.                            The columns are built up to slab level and the frame for further construction is prepared.
                        </p>
                    </li>
                    <li id='B6'>
                        <h2>6. Brick Masonry Work</h2>
                        <p>As the column and beam framework is completed masonry work is started with different materials such as bricks, concrete blocks, fly ash bricks, etc. according to the building drawing. Masonry work is done using a cement mortar mix. It is a mixture of cement & sand. During this carefully and as per drawing gaps are laid for doors and windows during the masonry work.</p>
                    </li>
                    <li id='B7'>
                        <h2>7. The Lintel Over Door Window Gaps
                        </h2>
                        <p>The lintel is constructed on the door and window to support the masonry work over it. After this further masonry work is done.
                        </p>
                    </li>
                    <li id='B8'>
                        <h2>
                            8. Floor Slab or Roof Structure
                        </h2>
                        <p>Then the formwork is started to construct the slab resting on the column and beam. Over slab formwork, slab reinforcement is placed as per the slab detailed drawing.</p>
                    </li>
                    <li id='B9'>
                        <h2>9. Door Window Framing and Fixations</h2>
                        <p>After that door window frames are fixed at their specified position given in the drawing</p>
                    </li>
                    <li id='B10'>
                        <h2>10. Electrical and Plumbing</h2>
                        <p>As we know buildings are constructed with a clean finish in which electrical and plumbing work is not visible. They are installed in the walls and slabs such that they are concealed and not visible after the finishing work is done.The point and pipe ends are left out such that later they can be finished with the electric fitting and plumbing fixtures. </p>
                    </li>
                    <li id='B11'>
                        <h2>11. Exterior Finishing</h2>
                        <p>Once this work is completed, external plastering and finishing work is started. Waterproofing is also done to prevent rising dampness in the wall. External cladding can also be done to enhance the elevation of the house.</p>
                    </li>
                    <li id='B12'>
                        <h2>12. Terrace and Roof Finishing</h2>
                        <p>On top of the slab, waterproofing done to prevent any leakage in the slab. Generally, terrazzo tiling is done to prevent the slab from a weathering effect.</p>
                    </li>
                    <li id='B13'>
                        <h2>13. Internal Finishing</h2>
                        <p>Internal walls are plaster with a smooth finish and flooring is done with tiles. Later on, the walls are painted or textured.</p>
                    </li>
                    <li id='B14'>
                        <h2>14. Woodwork and Fixture Fittings
                        </h2>
                        <p>By following the above step, almost all construction work is completed, and then furniture work is started. Side by side, electrical fitting, switchboard, and plumbing fittings are complete in the bathrooms and kitchen areas too.
                        </p>
                    </li>
                    <li id='B15'>
                        <h2>15. Waterproofing
                        </h2>
                        <p>Waterproofing a method that prevents water from penetrating your house. Waterproofing is very important as it helps keep your house dry.
                            It helps reduce humidity inside the house and thereby protects things inside your house from damage caused due to humidity or water exposure
                        </p>
                    </li>
                    <li id='B16'>
                        <h2>16. Painting Work
                        </h2>
                        <p>The most important purpose of house painting is to give our house a long life and adding colors to it is to give our house a beautiful makeover.
                            The painting work not only adds colors to house walls but protects their house from all stains and dirt and gives their house a long life, however, walls have a way of finding some stains.
                            There are various paint qualities that can be used to protect our house for a long time from stains, mud, sunlight, rain, dirt, etc.
                            from basic paint to high-quality paint which can give our house 5 to 10 years of extra life and an amazing look for the exterior and interior as well.
                            The last step of building construction is interior decoration work completing the building construction with proper furnishing and fabric used.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}
