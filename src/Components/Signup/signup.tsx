/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import "./signup.scss";

interface SignUpProps {
    firebaseApp: any; // Replace 'any' with the appropriate type for your Firebase app
}

const SignUp: React.FC<SignUpProps> = ({ firebaseApp }) => {
    // State variables for signup form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Handle form submission
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(password);

        try {
            const auth = getAuth(firebaseApp);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            if (userCredential.user) {
                // Additional user data to store in Firestore
                const userData = {
                    name,
                    email
                };

                const db = getFirestore(firebaseApp);
                await setDoc(doc(collection(db, 'users'), userCredential.user.uid), userData);

                // Clear form fields
                setName('');
                setEmail('');
                setPassword('');

                // Display success message to the user
                alert('Signup successful! Please check your email for verification.');
            }
        } catch (error: any) {
            // Handle signup error
            console.error('Signup error:', error.message);
            alert('Signup error. Please try again.');
        }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Navbar />

            <div className='signup__container'>
                <div>
                    <form onSubmit={handleSignup}>

                        <input type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        {/* <input type="password" placeholder='Password' /> */}
                        <div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                // id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Password"
                                className='password'
                            />
                            <i className={`fa-solid password-toggle-icon ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                                onClick={handleTogglePassword}
                            >
                            </i>
                        </div>


                        <a>Forgot your password?</a>

                        <button type='submit'>Sign up</button>

                    </form>
                    <p>Already have an account? <NavLink to="/SignIn">Sign in</NavLink></p>
                    <p>By signing in with an account, you agree to<br /> Scissors <a>Terms of Service,</a> <a>Privacy Policy</a> and <a>Acceptable Use Policy.</a> </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SignUp;
