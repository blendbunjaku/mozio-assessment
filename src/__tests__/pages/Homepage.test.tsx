import React from 'react';
import { render } from '@testing-library/react';
import Homepage from '../../pages/Homepage/Homepage';

describe('Homepage', () => {
    test('renders Homepage component and its children', () => {
        const { container } = render(<Homepage />);
        expect(container.firstChild).toHaveClass('homepageContainer');
    });
});
