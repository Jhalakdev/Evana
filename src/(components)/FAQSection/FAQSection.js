'use client'
import { useLayoutEffect } from 'react'
// import CreateFAQs from '../utils/CreateFAQs'
import faqcss from './FAQ.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default function FAQSection() {
    useLayoutEffect(function () {

        gsap.registerPlugin(ScrollTrigger)
        gsap.to(`.${faqcss.wrapper} h1`, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${faqcss.section}`,
                start: 'top 60%',
                // markers:true,
            }
        })
        gsap.to(`.${faqcss.listContainer} ol li`, {
            opacity: 1,
            stagger: 0.05,
            y: 0,
            delay: 0.25,
            scrollTrigger: {
                scroller: 'body',
                trigger: `.${faqcss.section}`,
                start: 'top 60%',
            }
        })
    })
    return <section className={faqcss.section}>
        <div className={faqcss.wrapper}>
            <h1>Frequently Asked Questions</h1>
            <div className={faqcss.listContainer}>
                <ol>
                    {/* {CreateFAQs()} */}
                    <li key={1}>
                        <h2>1. What exactly does Evana Infratech do?</h2>
                        <p>Evana Infratech is basically a stop solution for all your construction-related needs. For example, say you have purchased land and now you want to construct any type of building over it like a House, bungalow, Hospital, mall, etc. Evana Infratech will construct every inch of your building and will hand over the key to you. </p>
                    </li>
                    <li key={2}>
                        <h2>2. Which types of material does Evana Infratech use?</h2>
                        <p>We have different packages based on material selection. We can use any material based on your choices and preferences. We give you a standard quotation, where we mention all the materials and brands. For example, steel of Tata, Cement of ACC, paint of Asian, etc. However, clients have the liberty to choose materials and brands of their choice. </p>
                    </li>
                    <li key={3}>
                        <h2>3. What will be the total cost of my building construction?</h2>
                        <p>The cost of any building can be precisely calculated only after analysis of drawings and the requirements of the client. However, on a very broad basis, the rate varies from Rs 1600 per square feet to Rs 2000 per Square feet. Rates can even be higher depending upon different permutations and combinations. Refer to the package session for more information. </p>
                    </li>
                    <li key={4}>
                        <h2>4. How cost of the building is calculated?</h2>
                        <p>The total cost of the building is calculated from the casted slab. For example, if the quoted rate is Rs 1700 per square feet and the total slab of the building is 1000 Square Feet then the final rate of the building shall be Rs 1700000 plus additional charges.</p>
                    </li>
                    <li key={5}>
                        <h2>5. What are additional/extra charges? </h2>
                        <p>Some parts of the buildings have variations depending upon multiple factors like soil conditions, types of facade, boundary walls, etc. In a crude sense, any structure of the building that is outside the slab of the building taken for calculation is taken under the head of additional cost. As of today, some items under extra costs are soil filing, mumty slab, landscaping, boundary wall with gate, any structure outside the slab, any materials used in the facade other than concrete, cement and paint. </p>
                    </li>
                    <li key={6}>
                        <h2>6. Upto which stage you hand over the building?</h2>
                        <p>We provide ready-to-shift buildings. In simple words, we hand over the building after complete finishing excluding the interior works. All scopes of work are clearly mentioned in the agreement/ quotation. We strongly recommend you to read the agreement properly to understand the scope of work.</p>
                    </li>
                    <li key={7}>
                        <h2>7. I have not purchased the land. Can you help me?</h2>
                        <p>Yes. We do help the client with land purchase and registration. However, our core expertise and job is in the field of construction. All other services are merely complimentary for the smooth functioning of the project. </p>
                    </li>
                    <li key={8}>
                        <h2>8. I have purchased the land, can you help with map passing/approval from Municipal? </h2>
                        <p>Yes. We do help the client in map passing. However, our core expertise and job is in the field of construction. All other services are merely complimentary for smooth functioning. </p>
                    </li>
                    <li key={9}>
                        <h2>9. Do you charge anything for architectural drawings?</h2>
                        <p>For simple homes and bungalows, we provide all architectural drawings free of cost. However, for technical buildings like hospitals, malls, schools, etc, we take some additional charges as plans for these buildings require more teams of experts. </p>
                    </li>
                    <li key={10}>
                        <h2>10. Do I have to pay the full amount before the project starts?</h2>
                        <p>No. You will have to pay different amounts based on the personalised payment schedule based on the construction stages of your project. We charge a 2% booking amount during the signing of agreement. The next stage of 8% of the total amount is collected once the floor plan is finalised. Our construction company then moves forward with structural drawings(foundation, beam, slab, column, etc), MEP drawings, 3D elevation/facade, and the finaliazstion of project team.After the completion of the design phase, the finalised product is handed over to the project management team. This is where you need to pay 15% of the project value until the plinth is constructed. From here on, the remaining payment will be based on stages specific to the project. Refer to the agreement for more details.</p>
                    </li>
                    <li key={11}>
                        <h2>11. What is the estimated time it will take to build a full house?</h2>
                        <p>It takes 10 to 16 months to complete a house construction project. However, it&apos;s not a thumb rule. The duration of project depends on multiple factors like space, built-up area, location, design, weather, soil condition, etc. </p>
                    </li>
                    <li key={12}>
                        <h2>12. What is a super built-up area, built-up area, and carpet area?</h2>
                        <p>Carpet Area is the total usable area inside the house that can be covered by Carpet. The carpet area excludes the balcony and other utility areas but does include the area covered by internal walls.<br />Built-up Area is the sum of carpet area plus the area covered by the balcony, terrace, and other utility as well.<br />The Super built-up area is the total sum of the built-up area and space occupied by common areas like lobby, staircase, elevator, shafts, and clubhouse. This is often referred to as a saleable area.</p>
                    </li>
                    <li key={13}>
                        <h2>13. Does Evana Infratech charge an advance payment? </h2>
                        <p>Yes. We charge a booking amount of about 2% of the total estimation of construction cost. </p>
                    </li>
                    <li key={14}>
                        <h2>14. Is boundary wall included in the package?</h2>
                        <p>No. Since types of boundary walls depend on house to house, it is a standard practice to put it under extra cost head. Some buildings even do not have boundary walls and some have only 2/3-sided walls. Hence, it&apoos;s always kept under additional head.</p>
                    </li>
                    <li key={15}>
                        <h2>15. What happens if I want a different brand of materials other than the ones in the packages?</h2>
                        <p>Our packages are developed in a modular manner. Hence, any change in the specification is as simple as adding something to your shopping cart and removing something from the shopping cart. However, this shall affect the cost and estimation.</p>
                    </li>
                    <li key={16}>
                        <h2>16. Does Evana Infratech provide loans for construction?</h2>
                        <p>We don&apos;t provide direct loans to customers. However, we help the clients with the documentation part of the loan approval process. We have also partnered with a couple of banks and NBFCs for attractive interest rates.</p>
                    </li>
                    <li key={17}>
                        <h2>17. Does Evana Infratech provide interior along with the construction?</h2>
                        <p>There are separate packages for interior works if you wish to get the interiors done through us.</p>
                    </li>
                    <li key={18}>
                        <h2>18. What if the prices of the materials increase when the project is ongoing? Would there be a price escalation?</h2>
                        <p>The pricing of our contracts is sealed on a stamp paper. Hence, the prices remain stable in most of the situations. However, in some exceptional situations where there is a sudden spike in prices due to external circumstances, the price variation is to be paid by the client.</p>
                    </li>
                    <li key={19}>
                        <h2>19. What are the major factors on which house construction cost depends?</h2>
                        <p>Construction cost of a house primarily depends on quality of construction materials, brand of materials, built up area, location of site, types of finishing, etc.</p>
                    </li>
                    <li key={20}>
                        <h2>20. How to Evana Invratech ensures that my building has good strength?</h2>
                        <p>We have a team of best structural consultants, who design structures in such a way that they can sustain the dead load of the building. Our buildings qualify all major parameters of strength and durability with time-tested technologies and construction materials.</p>
                    </li>
                    <li key={21}>
                        <h2>21. Where the labourers will stay?</h2>
                        <p>For fast execution of work, labourers will stay in the construction site itself in some temporary house, which would be dismantled post-construction.</p>
                    </li>
                    <li key={22}>
                        <h2>22. Do you work only on labour costs?</h2>
                        <p>No. We work on complete turnkey projects only. However, we work on a model of Project Management Consultancy(PMC).</p>
                    </li>
                    <li key={23}>
                        <h2>23. What is the Project Management Consultancy(PMC) model of Evana Infratech?</h2>
                        <p>Project Management Consultancy(PMC) is a unique working model of our company. In this model, we provide an approximate budget of material and labour to the client. After the finalization of designs, the client only makes payments for both materials and labour. Our job is to make sure that the design is translated into the ground with minimum error and technical loopholes.</p>
                    </li>
                    <li key={24}>
                        <h2>24.What is the first step of building construction?</h2>
                        <p>The first step of building construction is ensuring the ground is cleared and graded properly. Water and electricity connections are mandatory before the start of actual work. The next step after land preparation foundation work. The type of foundation is determined by structural consultant depending upon the type and size of the building. The skeleton is then created through framing. The walls and windows, doors, and fittings are installed. The electrical and plumbing are done next. The roof is put up, and the finishing is done.</p>
                    </li>
                    <li key={25}>
                        <h2>25.What is the order/step of building construction?</h2>
                        <p>Construction order refers to the major sequence of work followed while constructing a building. Construction order typically starts with marking layout, excavation, foundation, framing, brick masonry, roofing, flooring, and finishing. All these steps include several activities. These steps have been mentioned in very broad sense. Typically, building construction is a miscellaneous process.</p>
                    </li>
                    <li key={26}>
                        <h2>26.What are three major phases of construction work?</h2>
                        <p>The building construction process starts from pre-construction, construction, and finally, post-construction. Each of these phases involves different activities.</p>
                    </li>
                </ol>
            </div>
        </div>
    </section>
}