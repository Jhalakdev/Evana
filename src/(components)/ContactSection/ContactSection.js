import Link from 'next/link'
import data from '../datas/Contact'
import contactcss from './ContactSection.module.css'
export default function ContactSection() {
    return <section className={contactcss.section}>
        <div className={contactcss.wrapper}>
            <div className={contactcss.text}>
                <span>CONTACT US</span>
                <h2>Message us for more details</h2>
                <p>Your message is on its way, delivered in a digital heartbeat.</p>
            </div>
            <div className={contactcss.formContainer}>

                <form className={contactcss.form}>
                    <div>

                        <input
                            name='name'
                            placeholder='Your Name'
                            type='text'
                        />
                        <input
                            type='email'
                            placeholder='Your Email'
                            name='email'
                        />
                    </div>
                    <input
                        type='text'
                        placeholder='Subject'
                        name='subject'
                    />
                    <textarea
                        placeholder='Message'
                        name="message"
                        rows={10}
                    />
                    <button>SEND MESSAGE</button>
                </form>
                <div className={contactcss.info}>
                    {/* <Link style={{ textDecoration: 'none', color: 'black' }} href={'/'}> */}
                    <div className={contactcss.infoCard}>
                        <div className={contactcss.svgContainer}>
                            <svg
                                fill='#FC5E28' height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        </div>
                        <div>
                            <h2>Address:</h2>
                            <span><strong>Ranchi:</strong> Office 2<sup>nd</sup> Floor, Madhushree Heights, Beside Central Bank, Near Meenakshi Netralaya, Harmu - 834002<br /><br />
                                <strong>Pune:</strong> Office no.107, Ganesh Imperia, Opp. Omega Paradise Society, Wakad - 411057
                                <br />
                                <br />
                                <strong>Bhagalpur: </strong>
                                Townhall, Jogsar, Adampur, Swami Vivekanand Road, Bhagalpur, 812001
                            </span>
                        </div>
                    </div>
                    {/* </Link> */}
                    {/* <Link style={{ textDecoration: 'none', color: 'black' }} href={`tel:${data.tel}`}> */}
                    <div className={contactcss.infoCard}>
                        <div className={contactcss.svgContainer}>
                            <svg height="16" width="16"
                                fill='#FC5E28' viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>

                        </div>
                        <div>
                            <h2>Phone:</h2>
                            <Link style={{ textDecoration: 'none', color: 'black' }} href={`tel:${data.tel}`}><p>+{data.tel}</p></Link>
                            {/* <Link style={{ textDecoration: 'none', color: 'black' }} href={`tel:${data.tel2}`}><p>+{data.tel2}</p></Link> */}
                            <Link style={{ textDecoration: 'none', color: 'black' }} href={`tel:${data.tel3}`}><p>+{data.tel3}</p></Link>
                        </div>
                    </div>
                    {/* </Link> */}
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={`mailto:${data.email}`}>
                        <div className={contactcss.infoCard}>
                            <div className={contactcss.svgContainer}>

                                <svg height="16" width="16" viewBox="0 0 512 512" fill='#FC5E28'><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>                        </div>
                            <div>
                                <h2>Email:</h2>
                                <p>{data.email}</p>
                            </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={data.web}>
                        <div className={contactcss.infoCard}>
                            <div className={contactcss.svgContainer}>
                                <svg height="16"
                                    fill='#FC5E28' width="16" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>
                            </div>
                            <div>
                                <h2>Website:</h2>
                                <p>{data.web}</p>
                            </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'https://api.whatsapp.com/send/?phone=918605183887&text&type=phone_number&app_absent=0'} target='blank'>
                        <div className={contactcss.infoCard}>
                            <div className={contactcss.svgContainer}>
                                <svg fill='var(--red)' height="16" width="14" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg></div>
                            <div>
                                <h2>Whatsapp</h2>
                                <p>+{data.tel2}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    </section>
}