'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import inqcss from './Inquery.module.css';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        service: "",
        message: ""
    });

    const path = usePathname();
    const [open, setOpen] = useState(false);

    useLayoutEffect(() => {
        if (open) {
            gsap.to(`.${inqcss.form}`, {
                opacity: 1,
                y: 0,
            });
        }
    }, [open]);

    useEffect(() => {
        const inquireButtons = document.querySelectorAll('.inquire');
        inquireButtons.forEach(button => {
            button.addEventListener('click', () => {
                setOpen(true);
                document.body.style.overflowY = "hidden";
            });
        });

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeForm();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [path]);

    const closeForm = () => {
        setOpen(false);
        document.body.style.overflowY = "scroll";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/v1/auth/inquire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                toast.success('Inquiry submitted successfully');
                setFormData({
                    firstname: "",
                    lastname: "",
                    phone: "",
                    service: "",
                    message: ""
                });
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error('Failed to submit inquiry');
        } finally {
            closeForm();
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {open && (
                <main className={inqcss.main}>
                    <div className={inqcss.wrapper}>
                        <form className={inqcss.form} onSubmit={handleSubmit}>
                            <div className={inqcss.svgContainer} onClick={closeForm}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                </svg>
                            </div>
                            <h2>Request Quote</h2>
                            <input type='text' placeholder='First Name' name='firstname' value={formData.firstname} onChange={handleInputChange} required />
                            <input type='text' placeholder='Last Name' name='lastname' value={formData.lastname} onChange={handleInputChange} required />
                            <input type='number' placeholder='Phone' name='phone' value={formData.phone} onChange={handleInputChange} required />
                            <select name="service" value={formData.service} onChange={handleInputChange} required>
                                <option value="">Select your service</option>
                                <option value="Complete Construction">Complete Construction</option>
                                <option value="Complete Interior">Complete Interior</option>
                                <option value="Designing and Planning">Designing and Planning</option>
                            </select>
                            <textarea rows={5} placeholder='Message' name='message' value={formData.message} onChange={handleInputChange}></textarea>
                            <button type="submit">REQUEST A QUOTE</button>
                        </form>
                    </div>
                </main>
            )}
            <ToastContainer 
                position="top-right" 
                autoClose={5000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                rtl={false} 
                pauseOnFocusLoss 
                draggable 
                pauseOnHover
                className="toast-container"
            />
        </>
    );
}
