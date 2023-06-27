import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
    test('renders navbar component correctly', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        // Test the presence of some elements in the navbar
        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getByText('My URLs')).toBeInTheDocument();
        expect(screen.getByText('Features')).toBeInTheDocument();
        expect(screen.getByText('Pricing')).toBeInTheDocument();
        expect(screen.getByText('Analytics')).toBeInTheDocument();
        expect(screen.getByText('FAQs')).toBeInTheDocument();
        expect(screen.getByText('Log In')).toBeInTheDocument();
        expect(screen.getByText('Sign Up')).toBeInTheDocument();
        expect(screen.getByText('Try for free')).toBeInTheDocument();
    });
});
