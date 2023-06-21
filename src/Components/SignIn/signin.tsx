import "./signin.scss";
import React, { useState } from 'react';
import { FirebaseApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';


interface SignInProps {
    firebaseApp: FirebaseApp;
}

const SignIn: React.FC<SignInProps> = ({ firebaseApp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const auth = getAuth(firebaseApp);
            await signInWithEmailAndPassword(auth, email, password);

            // Clear form fields
            setEmail('');
            setPassword('');

            // Redirect to the home page
            navigate('/');
        } catch (error: any) {
            console.error('Sign-in error:', error.message);
            alert('Sign-in error. Please check your email and password.');
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (

        <div>
            <Navbar />

            <div className="signin__container">
                <div>
                    <form onSubmit={handleSignIn}>
                        <input type="email" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        {/* <input type="password" placeholder='Password' /> */}
                        <div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                // id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className='password'
                            />
                            <i className={`fa-solid password-toggle-icon ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                                onClick={handleTogglePassword}
                            >
                            </i>
                        </div>


                        <a>Forgot your password?</a>

                        <button type='submit'>Sign In</button>

                    </form>
                    <p>Don't have an account? <NavLink to="/SignUp">Sign Up</NavLink></p>
                    <p>By signing in with an account, you agree to<br /> Sciccor's <a>Terms of Service,</a> <a>Privacy Policy</a> and <a>Acceptable Use Policy.</a> </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SignIn;
