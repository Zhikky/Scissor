import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from './signin';
import { FirebaseApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '@testing-library/jest-dom/extend-expect';

jest.mock('firebase/auth', () => {
    const signInWithEmailAndPassword = jest.fn();
    const auth = {
        signInWithEmailAndPassword,
    };

    return {
        __esModule: true,
        getAuth: jest.fn(() => auth),
        signInWithEmailAndPassword,
    };
});

const firebaseAppMock: FirebaseApp = {} as FirebaseApp;

describe('SignIn', () => {
    test('calls signInWithEmailAndPassword function with correct credentials', async () => {
        const { getByLabelText, getByText } = render(
            <MemoryRouter>
                <SignIn firebaseApp={firebaseAppMock} />
            </MemoryRouter>
        );

        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Password');
        const submitButton = getByText('Sign In');

        await act(async () => {
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password' } });
            fireEvent.click(submitButton);
        });

        const auth = getAuth(firebaseAppMock);
        expect(getAuth).toHaveBeenCalledWith(firebaseAppMock);
        expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
            auth,
            'test@example.com',
            'password'
        );
    });
});
