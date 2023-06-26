/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';

//Importing Formik and Yup for Form Validation
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./signup.scss";

interface SignUpProps {
    firebaseApp: any; // Replace 'any' with the appropriate type for your Firebase app
}

const SignUp: React.FC<SignUpProps> = ({ firebaseApp }) => {
    const [showPassword, setShowPassword] = useState(false);


    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });

    const handleSignup = async (values: { name: string, email: string, password: string }) => {
        const { name, email, password } = values;

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
                formik.resetForm();

                // Display success message to the user
                alert('Signup successful! Please check your email for verification.');
            }
        } catch (error: any) {
            // Handle signup error
            console.error('Signup error:', error.message);
            alert('Signup error. Please try again.');
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

                        <input type="text" placeholder='Full Name' id="name" {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div>}
                        <input type="text" placeholder="Email address" required id="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
                        <div className='password__signup'>
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
