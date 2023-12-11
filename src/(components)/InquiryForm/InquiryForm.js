'use client'
import { useEffect, useLayoutEffect, useState } from 'react'
import inqcss from './Inquery.module.css'
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
export default function InquiryForm() {
    const path = usePathname();
    const [open, setOpen] = useState(false);
    useLayoutEffect(function(){
        gsap.to(`.${inqcss.form}`,{
            opacity:1,
            y:0,
            
        })
    })
    useEffect(function () {
        const inquireButtons = document.querySelectorAll('.inquire');
        inquireButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                setOpen(true);
                document.querySelector('body').style.overflowY = "hidden";
            })
        })
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                setOpen(false);
                document.querySelector('body').style.overflowY = "scroll";

            }
        })
    }, [path])
    function handleSubmit() {
        setOpen(false);
        document.querySelector('body').style.overflowY = "scroll";

    }
    return open && <main className={inqcss.main}>

        <div className={inqcss.wrapper}>
            <form className={inqcss.form}>
                <div
                    onClick={function () {
                        setOpen(false);
                        document.querySelector('body').style.overflowY = "scroll"
                    }}
                    className={inqcss.svgContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <h2>Request Quote</h2>
                <input type='text' placeholder='First Name' name='fname' />
                <input type='text' placeholder='Last Name' name='lname' />
                <input type='number' placeholder='Phone' name='phone' />
                <select>
                    <option value>Select your service</option>
                    <option value>Complete Construction</option>
                    <option value>Complete Interior</option>
                    <option value>Designing and Planning</option>
                </select>
                <textarea rows={5} placeholder='Message' name='message'></textarea>
                <button onClick={handleSubmit}>REQUEST A QUOTE</button>
            </form>
        </div>
    </main>
}