'use client'
import { useState } from 'react';
import Link from 'next/link';
import data from '../datas/Contact';
import contactcss from './ContactSection.module.css';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        console.log(formData)
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
            setResponseMessage(data.message);
            if (data.success) {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            setResponseMessage('Error submitting feedback');
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
                        {responseMessage && <p>{responseMessage}</p>}
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
                                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zM451 128H338.3c15.1 27.8 26.8 58.8 34.8 92.1 4.4 18.3 8 37.5 10.6 57.1H494.6c-7.3-55-33.7-104.3-73.6-140.5zM325.7 128H186.3c21.5 48 33.8 104.7 36.3 164.1H301c2.5-59.4 14.8-116.1 36.3-164.1zM253 128H161c-18.4 32.8-32 69.1-39.5 108.4-3.6 18.7-6.3 38.2-8 57.6H203.6c2.6-19.6 6.2-38.9 10.6-57.1C226.2 186.8 237.9 155.8 253 128zM173.7 128H61C21.1 164.2-5.3 213.5-12.6 268.5h111.2c2.5-19.6 6.2-38.9 10.6-57.1C147 186.8 158.6 155.8 173.7 128zM8.1 320c5.3-20.5 8.1-41.9 8.1-64s-2.8-43.5-8.1-64H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1zm41.9 128H173.7c-15.1-27.8-26.8-58.8-34.8-92.1-4.4-18.3-8-37.5-10.6-57.1H17.4c7.3 55 33.7 104.3 73.6 140.5zm123.4 0H325.7c-21.5-48-33.8-104.7-36.3-164.1H216.3c-2.5 59.4-14.8 116.1-36.3 164.1zm72.7 0H338.3c18.4-32.8 32-69.1 39.5-108.4 3.6-18.7 6.3-38.2 8-57.6H308.4c-2.6 19.6-6.2 38.9-10.6 57.1C285.8 325.2 274.1 356.2 258.7 384zM138.3 384H61c39.9 36.2 89.3 62.6 144.5 69.9-8.1-33.3-19.8-64.3-34.9-92.1zm168.3 0h115.4c-39.9 36.2-89.3 62.6-144.5 69.9 8.1-33.3 19.8-64.3 34.9-92.1zm152.1 32h-115.4c15.1 27.8 26.8 58.8 34.8 92.1 55.2-7.3 104.6-33.7 144.5-69.9z" />
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
        </section>
    );
}
