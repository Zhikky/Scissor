import React, { useState } from 'react';
import { FirebaseApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './signup.scss';

interface SignUpProps {
    firebaseApp: FirebaseApp;
}

const SignUp: React.FC<SignUpProps> = ({ firebaseApp }) => {
    // State variables for signup form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Handle form submission
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const auth = getAuth(firebaseApp);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            if (userCredential.user) {
                // Additional user data to store in Firestore
                const userData = {
                    name,
                    email,
                    location,
                };

                const db = getFirestore(firebaseApp);
                await setDoc(doc(collection(db, 'users'), userCredential.user.uid), userData);

                // Clear form fields
                setName('');
                setEmail('');
                setLocation('');
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

    // Handle Google sign-in
    const handleGoogleSignIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            // User has signed in with Google successfully
        } catch (error) {
            // Handle sign-in error
            console.error('Google sign-in error:', error);
        }
    };


    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(event.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='signup__container'>
            {/* <h2>Signup Page</h2>

      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="submit">Sign up</button>
      </form> */}


            <div>
                <button type="button" onClick={handleGoogleSignIn}>
                    Sign up with Google
                </button>
                <p>OR</p>
                <form>
                    <input type="text" placeholder="Email address or username" required />
                    {/* <input type="password" placeholder='Password' /> */}
                    <div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            // id="password"
                            value={passwordInput}
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
                <p>Already have an account? <NavLink to="/SignUp">Sign in</NavLink></p>
                <p>By signing in with an account, you agree to<br /> Sciccor's <a>Terms of Service,</a> <a>Privacy Policy</a> and <a>Acceptable Use Policy.</a> </p>
            </div>
        </div>
    );
};

export default SignUp;
