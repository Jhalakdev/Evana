'use client'
import data from '../datas/NavbarListData'
import cdata from '../datas/Contact'
import navcss from './Navbar.module.css'
import createNavbarList from '../utils/NavbarList'
import Link from 'next/link'
import { useEffect, useState } from 'react'
export default function Navbar() {
    const [open, setOpen] = useState(false);
    function createNavbar() {
        return data.map(function (dataitem, index) {
            return createNavbarList(dataitem, index)
        })
    }

    return (<div className={navcss.navbarWrapper}>
        <div className={navcss.accordion}>
            <div className={navcss.accordionWrapper}>
                <div className={navcss.acwu}>
                    <div>
                        <svg fill='#FC5E28' height="16" width="16" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                        <Link style={{ textDecoration: 'none' }} href='mailto:evanainfratech@gmail.com'><span>evanainfratech@gmail.com</span></Link>
                    </div>
                    <div>
                        <Link href={cdata.facebook} target='blank'>
                            <div className={navcss.svgContainer}>

                                <svg height="16" width="10" fill='#FC5E28' viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            </div>
                        </Link>
                        
                        <Link href={cdata.instagram} target='blank'>
                            <div className={navcss.svgContainer}>

                                <svg fill='#FC5E28' height="16" width="14" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </div>
                        </Link>
                        <Link href={cdata.youtube} target='blank'>
                            <div className={navcss.svgContainer}>

                                <svg fill='var(--red)' xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <button className='inquire'>INQUIRE NOW</button>
                </div>
            </div>
        </div>
        <div className={navcss.upper}>
            <div className={navcss.logo}>
                <Link style={{ textDecoration: 'none' }} href={'/'}>
                    <img src='/Logo.png' />
                </Link>
            </div>
            <div className={navcss.upperIn}>
                <div className={navcss.svgContainer}>
                    <svg fill='#FC5E28' xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" /></svg>
                </div>
                <div>
                    <p><span>Call</span><Link href={`tel:${cdata.tel}`} style={{ textDecoration: 'none', color: 'black' }}>&nbsp; +{cdata.tel}</Link></p>
                    <p>Call Us Now 24/7 Customer Support</p>
                </div>
            </div>
            {/* <div className={navcss.upperIn}> */}
            {/* <div className={navcss.svgContainer}>
                    <svg fill='#FC5E28' height="16" width="16" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                </div> */}
            {/* <div>
                    <p>Our Location</p>
                    <p>{cdata.address}<br />{cdata.address2}</p>
                </div> */}
            {/* </div> */}
        </div>

        <div className={navcss.navbarInner}>

            <div className={navcss.navbar}>
                <ul>
                    {createNavbar()}
                </ul>
                <div className={navcss.inquiryButton}><button className='inquire'>INQUIRE NOW</button></div>
            </div>
        </div>
        <div className={navcss.navbarMobile}>
            <div className={navcss.navMobileWrapper}>

                <div onClick={function () {
                    setOpen(!open);
                }} className={navcss.menu}>
                    <div className={navcss.icon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h2>MENU</h2>
                </div>

                {open && <div className={navcss.links}>

                    <ul>
                        <Link href={'/'}><li>HOME</li></Link>
                        <Link href={'/about'}><li>ABOUT US</li></Link>
                        <Link href={'/services'}><li>SERVICES</li></Link>
                        <Link href={'/process'}><li>PROCESS</li></Link>
                        <Link href={'/faqs'}><li>FAQs</li></Link>
                        <Link href={'/contact'}><li>CONTACT</li></Link>
                    </ul>
                    <div className={navcss.button}>
                        <button>INQUIRE NOW</button>
                    </div>
                </div>}
            </div>
        </div>
    </div>)
}