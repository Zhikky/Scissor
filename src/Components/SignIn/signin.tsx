/* eslint-disable react/no-unescaped-entities */
import "./signin.scss";
import React, { useState } from 'react';
import { FirebaseApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';

//Importing Formik and Yup for Form Validation
import { useFormik } from 'formik';
import * as Yup from 'yup';


interface SignInProps {
    firebaseApp: FirebaseApp;
}

const Loader = () => {
    return <span className="loader"></span>;
};

const SignIn: React.FC<SignInProps> = ({ firebaseApp }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSignIn = async (values: { email: string, password: string }) => {
        const { email, password } = values;
        setSubmitting(true); // Set submitting state to true
        try {
            const auth = getAuth(firebaseApp);
            await signInWithEmailAndPassword(auth, email, password);

            // Clear form fields
            formik.resetForm();

            setSubmitting(false);

            // Redirect to the home page
            navigate('/');

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Sign-in error:', error.message);
            alert('Sign-in error. Please check your email and password.');
            setSubmitting(false); // Set submitting state to false
        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSignIn,
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (

        <div>
            <Navbar />

            <div className="signin__container">
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email address" required id="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
                        <div className="signin__password">
                            <label htmlFor="password">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                // id="password"
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

                        <button type='submit'>{submitting ? <Loader /> : "Sign In"}</button>

                    </form>
                    <p>Don't have an account? <NavLink to="/SignUp">Sign Up</NavLink></p>
                    <p>By signing in with an account, you agree to<br /> Scissor's <a>Terms of Service,</a> <a>Privacy Policy</a> and <a>Acceptable Use Policy.</a> </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SignIn;
