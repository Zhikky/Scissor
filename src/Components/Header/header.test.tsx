import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
    test('renders header content correctly', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        // Test the presence of some elements in the header
        expect(screen.queryByText(/Optimize Your Online Experience with Our Advanced/)).toBeInTheDocument();
        const urlShorteningElements = screen.queryAllByText('URL Shortening');
        expect(urlShorteningElements.length).toBe(2);
        expect(screen.getByText('Custom URLs')).toBeInTheDocument();
        expect(screen.getByText('QR Codes')).toBeInTheDocument();
        expect(screen.getByText('Data Analytics')).toBeInTheDocument();
    });

});
