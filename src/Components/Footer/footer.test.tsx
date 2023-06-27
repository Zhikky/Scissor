import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';
import '@testing-library/jest-dom/extend-expect';


describe('Footer', () => {
    test('renders footer component correctly', () => {
        const { getByText } = render(<Footer />);

        // Test the presence of some elements in the footer
        expect(getByText('Why Scissor?')).toBeInTheDocument();
        expect(getByText('Solutions')).toBeInTheDocument();
        expect(getByText('Products')).toBeInTheDocument();
        expect(getByText('Company')).toBeInTheDocument();
        expect(getByText('Resources')).toBeInTheDocument();
        expect(getByText('Features')).toBeInTheDocument();
        expect(getByText('Legal')).toBeInTheDocument();
        expect(getByText('Terms of Service | Security | Scissor 2023')).toBeInTheDocument();
    });
});
