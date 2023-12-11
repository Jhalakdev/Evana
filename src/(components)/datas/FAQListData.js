const data = [
    {
        answer: "Evana Infratech is a construction company that provides end-to-end solutions for building construction, from land acquisition and planning to construction and handover of the finished building.",
        id: 1,
        question: "1. What exactly does Evana Infratech do?"
    },
    {
        answer: "Evana Infratech uses a variety of materials, depending on the client's specifications and budget. They offer a range of standard packages that include different materials, and clients are also free to choose their own materials.",
        id: 2,
        question: "2. Which types of material does Evana Incratech use?"
    },
    {
        answer: "The cost of building construction can vary depending on a number of factors, including the size and complexity of the building, the materials used, and the location of the site. Evana Infratech can provide a rough estimate of the cost based on the client's requirements, but the final cost will not be known until the project is complete.",
        id: 3,
        question: "3. What will be the total cost of my building construction?"
    },
    {
        answer: "The cost of the building is calculated based on the total square footage of the building and the cost per square foot. The cost per square foot can vary depending on a number of factors, including the materials used, the complexity of the building, and the location of the site.",
        id: 4,
        question: "4. How is the cost of the building calculated?"
    },
    {
        answer: "Additional charges are any costs that are not included in the base price of the building. These charges may include the cost of soil testing, landscaping, boundary walls, and any other work that is not covered in the standard package.",
        id: 5,
        question: "5. What are additional/extra charges?"
    },
    {
        answer: "Evana Infratech hands over the building in a ready-to-shift condition. This means that all of the major construction work is complete, including the foundation, walls, roof, flooring, and windows. However, the client is responsible for completing any interior work, such as painting, flooring, and fixtures.",
        id: 6,
        question: "6. Upto which stage you hand over the building?"
    },
    {
        answer: "Yes, Evana Infratech can help clients with land acquisition and registration. However, their core expertise is in construction, and they may charge additional fees for these services.",
        id: 7,
        question: "7. I have not purchased the land. Can you help me?"
    },
    {
        answer: "Yes, Evana Infratech can help clients with map passing/approval from the municipality. However, their core expertise is in construction, and they may charge additional fees for these services.",
        id: 8,
        question: "8. I have purchased the land, can you help with map passing/approval from Municipal?"
    },
    {
        answer: "Evana Infratech provides architectural drawings free of cost for simple homes and bungalows. However, for more complex buildings, they may charge additional fees for the design work.",
        id: 9,
        question: "9. Do you charge anything for architectural drawings?"
    },
    {
        answer: "No, clients do not have to pay the full amount before the project starts. Evana Infratech requires a booking amount of 2% of the total project cost, and the remaining amount is paid in installments as the project progresses.",
        id: 10,
        question: "10. Do I have to pay the full amount before the project starts?"
    },
    {
        answer: "The estimated time to build a full house is 10 to 16 months. However, the actual time may vary depending on a number of factors, such as the size and complexity of the building, the availability of materials, and the weather conditions.",
        id: 11,
        question: "11. What is the estimated time it will take to build a full house?"
    },
    {
        id: 12,
        question: "12. What is a super built-up area, built-up area, and carpet area?",
        answer: "Carpet Area is the total usable area inside the house that can be covered by Carpet. The carpet area excludes the balcony and other utility areas but does include the area covered by internal walls. Built-up Area is the sum of carpet area plus the area covered by the balcony, terrace, and other utility as well.The Super built-up area is the total sum of the built-up area and space occupied by common areas like lobby, staircase, elevator, shafts, and clubhouse. This is often referred to as a saleable area."
    },
    {
        id: 13,
        question: "13. Does Evana Infratech charge an advance payment?",
        answer: "Yes. We charge a booking amount of about 2% of the total estimation of construction cost. "
    },
    {
        id: 14,
        question: "14. Is boundary wall included in the package?",
        answer: "No. Since types of boundary walls depend on house to house, it is a standard practice to put it under extra cost head. Some buildings even do not have boundary walls and some have only 2/3-sided walls. Hence, it's always kept under additional head."
    },
    {

        id: 15,
        question: "15. What happens if I want a different brand of materials other than the ones in the packages?",
        answer: "Our packages are developed in a modular manner. Hence, any change in the specification is as simple as adding something to your shopping cart and removing something from the shopping cart. However, this shall affect the cost and estimation. "
    },
    {
        id: 16,
        question: "16. Does Evana Infratech provide loans for construction?",
        answer: "We don't provide direct loans to customers. However, we help the clients with the documentation part of the loan approval process. We have also partnered with a couple of banks and NBFCs for attractive interest rates."
    },
    {
        id: 17,
        question: "17. Does Evana Infratech provide interior along with the construction?",
        answer: "There are separate packages for interior works if you wish to get the interiors done through us. "
    },
    {
        id: 18,
        question: "18. What if the prices of the materials increase when the project is ongoing? Would there be a price escalation?",
        answer: "The pricing of our contracts is sealed on a stamp paper. Hence, the prices remain stable in most of the situations. However, in some exceptional situations where there is a sudden spike in prices due to external circumstances, the price variation is to be paid by the client."
    },
    {
        id: 19,
        question: "19. What are the major factors on which house construction cost depends?",
        answer: "Construction cost of a house primarily depends on quality of construction materials, brand of materials, built up area, location of site, types of finishing, etc. "
    },
    {
        id: 20,
        question: "20. How to Evana Invratech ensures that my building has good strength?",
        answer: "We have a team of best structural consultants, who design structures in such a way that they can sustain the dead load of the building. Our buildings qualify all major parameters of strength and durability with time-tested technologies and construction materials. "
    },
    {
        id: 21,
        question: "21. Where the labourers will stay?",
        answer: "For fast execution of work, labourers will stay in the construction site itself in some temporary house, which would be dismantled post-construction "
    },
    {
        id: 22,
        question: "22. Do you work only on labour costs?",
        answer: "No. We work on complete turnkey projects only. However, we work on a model of Project Management Consultancy(PMC) "
    },
    {
        id: '23',
        question: '23. What is the Project Management Consultancy(PMC) model of Evana Infratech?  ',
        answer: 'Project Management Consultancy(PMC) is a unique working model of our company. In this model, we provide an approximate budget of material and labour to the client. After the finalization of designs, the client only makes payments for both materials and labour. Our job is to make sure that the design is translated into the ground with minimum error and technical loopholes.',
    },
    {
        id: '24',
        question: '24.What is the first step of building construction?',
        answer: 'The first step of building construction is ensuring the ground is cleared and graded properly. Water and electricity connections are mandatory before the start of actual work. The next step after land preparation foundation work. The type of foundation is determined by structural consultant depending upon the type and size of the building. The skeleton is then created through framing. The walls and windows, doors, and fittings are installed. The electrical and plumbing are done next. The roof is put up, and the finishing is done.',
    },
    {
        id: '25',
        question: '25.What is the order/step of building construction?',
        answer: 'Construction order refers to the major sequence of work followed while constructing a building. Construction order typically starts with marking layout, excavation, foundation, framing, brick masonry, roofing, flooring, and finishing. All these steps include several activities. These steps have been mentioned in very broad sense. Typically, building construction is a miscellaneous process.',
    },
    {
        id: '26',
        question: '26.What are three major phases of construction work?',
        answer: 'The building construction process starts from pre-construction, construction, and finally, post-construction. Each of these phases involves different activities.',
    },

]
export default data