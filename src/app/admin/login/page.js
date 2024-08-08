"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for redirection

export default function AdminSignin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter(); // Initialize router

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        try {
            const response = await fetch('https://evana.onrender.com/api/v1/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(data.message);
                localStorage.setItem('token', data.token); // Store token or handle it as needed
                router.push('/admin/dashboard'); // Redirect to the admin dashboard
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Internal server error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2>Admin Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    {error && <p style={styles.error}>{error}</p>}
                    {success && <p style={styles.success}>{success}</p>}
                    <button type="submit" disabled={isLoading} style={styles.button}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
    },
    formContainer: {
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
    success: {
        color: 'green',
        marginTop: '10px',
    },
};
