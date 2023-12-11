import Link from 'next/link'
import servicecss from '../Services/Services.module.css'
export default function createServiceCard(dataitem) {


    return <div key={dataitem.id} className={servicecss.service}>
        <div className={servicecss.serviceImage}>
            <img src={dataitem.imgSrc} />

        </div>
        <div className={servicecss.serviceIcon}>
            <img src={dataitem.iconSrc} />

        </div>
        <div className={servicecss.serviceText}>
            <h2>{dataitem.title}</h2>
            <p>{dataitem.desc}</p>
        </div>
        <div className={servicecss.button}>
            <button className='inquire'>Inquire Now</button>
        </div>
    </div>


}