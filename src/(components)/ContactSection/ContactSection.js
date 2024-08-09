'use client';
import { useState } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from '../datas/Contact';
import contactcss from './ContactSection.module.css';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://evana.onrender.com/api/v1/auth/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                toast.success(data.message || 'Feedback submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error(data.message || 'Error submitting feedback');
            }
        } catch (error) {
            toast.error('Error submitting feedback');
        }
    };

    return (
        <section className={contactcss.section}>
            <div className={contactcss.wrapper}>
                <div className={contactcss.text}>
                    <span>CONTACT US</span>
                    <h2>Message us for more details</h2>
                    <p>Your message is on its way, delivered in a digital heartbeat.</p>
                </div>
                <div className={contactcss.formContainer}>
                    <form className={contactcss.form} onSubmit={handleSubmit}>
                        <div>
                            <input
                                name='name'
                                placeholder='Your Name'
                                type='text'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type='email'
                                placeholder='Your Email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            type='text'
                            placeholder='Subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <textarea
                            placeholder='Message'
                            name="message"
                            rows={10}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                    <div className={contactcss.info}>
                        <div className={contactcss.infoCard}>
                            <div className={contactcss.svgContainer}>
                                <svg
                                    fill='#FC5E28'
                                    height="16"
                                    width="12"
                                    viewBox="0 0 384 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </div>
                            <div>
                                <h2>Address:</h2>
                                <span>
                                    <strong>Pune:</strong> Office no.107, Ganesh Imperia, Opp. Omega Paradise Society, Wakad - 411057
                                    <br />
                                    <br />
                                    <strong>Nagpur:</strong> Plot No-4A, Manewada-Wela Harichandra Road, Near Goderej Orchard Estate, Opposite to Leverage Group, Besa, Nagpur - 440034
                                    <br />
                                    <br />
                                    <strong>Ranchi:</strong> Office 2<sup>nd</sup> Floor, Madhushree Heights, Beside Central Bank, Near Meenakshi Netralaya, Harmu - 834002<br /><br />
                                    <strong>Patna:</strong> Office NO. 102, SN MEHRA PALACE, Opp TO AN COLLEGE, BOARING ROAD, PATNA Pin - 800013
                                    <br />
                                    <br />
                                    <strong>Bhagalpur:</strong> Townhall, Jogsar, Adampur, Swami Vivekanand Road, Bhagalpur, 812001
                                </span>
                            </div>
                        </div>
                        <div className={contactcss.infoCard}>
                            <div className={contactcss.svgContainer}>
                                <svg
                                    fill='#FC5E28'
                                    height="16"
                                    width="16"
                                    viewBox="0 0 512 512">
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </div>
                            <div>
                                <h2>Phone:</h2>
                                <Link href={`tel:${data.tel}`} style={{ textDecoration: 'none', color: 'black' }}><p>+{data.tel}</p></Link>
                                <Link href={`tel:${data.tel3}`} style={{ textDecoration: 'none', color: 'black' }}><p>+{data.tel3}</p></Link>
                            </div>
                        </div>
                        <Link href={`mailto:${data.email}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <div className={contactcss.infoCard}>
                                <div className={contactcss.svgContainer}>
                                    <svg
                                        fill='#FC5E28'
                                        height="16"
                                        width="16"
                                        viewBox="0 0 512 512">
                                        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2>Email:</h2>
                                    <p>{data.email}</p>
                                </div>
                            </div>
                        </Link>
                        <Link href={data.web} style={{ textDecoration: 'none', color: 'black' }}>
                            <div className={contactcss.infoCard}>
                                <div className={contactcss.svgContainer}>
                                    <svg
                                        fill='#FC5E28'
                                        height="16"
                                        width="16"
                                        viewBox="0 0 512 512">
                                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.3 80H131.7c-15.7-20.4-27.7-43.4-34.5-68.3H61.5c-7.5 30.2-11.3 60.4-11.3 90.8s3.8 60.6 11.3 90.8h35.6c6.8-24.9 18.8-47.9 34.5-68.3h248.6c15.7 20.4 27.7 43.4 34.5 68.3h35.6c7.5-30.2 11.3-60.4 11.3-90.8s-3.8-60.6-11.3-90.8h-35.6c-6.8 24.9-18.8 47.9-34.5 68.3zM423 144H89c-2.5 6.7-5.2 13.3-8.2 20h255c3.1-6.7 5.7-13.3 8.2-20zm-40.4-32H124.4c-10.7-17.4-25.3-33.2-42.5-46.5h298.6c17.2 13.3 31.8 29.1 42.5 46.5zm90.8-32H425.7c-10.7-17.4-25.3-33.2-42.5-46.5h56.8c14.4 0 27.7 8.2 34.5 20.8s8.2 28.5 0 41.5c-6.8 12.6-20.1 20.8-34.5 20.8h-90.8c-10.7-17.4-25.3-33.2-42.5-46.5h-56.8c-14.4 0-27.7-8.2-34.5-20.8s-8.2-28.5 0-41.5c6.8-12.6 20.1-20.8 34.5-20.8h56.8c17.2 13.3 31.8 29.1 42.5 46.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2>Website:</h2>
                                    <p>{data.web}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </section>
    )
}
