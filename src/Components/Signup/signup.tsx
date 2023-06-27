import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.scss';

interface SignUpProps {
    firebaseApp: FirebaseApp; // Replace 'any' with the appropriate type for your Firebase app
}

const Loader = () => {
    return <span className="loader"></span>;
};

const SignUp: React.FC<SignUpProps> = ({ firebaseApp }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });

    const handleSignup = async (values: { name: string; email: string; password: string }) => {
        const { name, email, password } = values;
        setSubmitting(true); // Set submitting state to true
        try {
            const auth = getAuth(firebaseApp);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            if (userCredential && userCredential.user) {
                const userData = {
                    name,
                    email,
                };

                const db = getFirestore(firebaseApp);
                await setDoc(doc(collection(db, 'users'), userCredential.user.uid), userData);

                formik.resetForm();

                toast.success('Signup successful! Please check your email for verification.');
                setSubmitting(false);

                setTimeout(() => {
                    navigate('/SignIn');
                }, 2000); // Wait for 2 seconds (2000 milliseconds) before navigating
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Signup error:', error.message);
            toast.error('Signup error. Please try again.');
            setSubmitting(false); // Set submitting state to false
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSignup,
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Navbar />

            <div className='signup__container'>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" placeholder='Full Name' id="name" {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div>}

                        <label htmlFor="email">Email address</label>
                        <input type="text" placeholder="Email address" required id="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
                        <div className='password__signup'>
                            <label htmlFor="password">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password" {...formik.getFieldProps('password')}
                                placeholder="Password"
                                className='password'
                            />
                            {formik.touched.password && formik.errors.password && <div className='error'>{formik.errors.password}</div>}
                            <i className={`fa-solid password-toggle-icon ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                                onClick={handleTogglePassword}
                            >
                            </i>
                        </div>


                        <a>Forgot your password?</a>

                        <button type='submit'>{submitting ? <Loader /> : "Sign Up"}</button>

                    </form>
                    <p>Already have an account? <NavLink to="/SignIn">Sign in</NavLink></p>
                    <p>By signing in with an account, you agree to<br /> Scissors <a>Terms of Service,</a> <a>Privacy Policy</a> and <a>Acceptable Use Policy.</a> </p>
                </div>
            </div>

            <Footer />
            <ToastContainer /> {/* Add this line to render the toast notifications */}
        </div>
    );
};

export default SignUp;
