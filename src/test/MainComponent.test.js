import { render, screen } from '@testing-library/react';
import MainComponent from '../components/MainComponent';

test('renders prueba test link', () => {
    render(<MainComponent />);
    const linkElement = screen.getByText(/prueba test/i);
    expect(linkElement).toBeInTheDocument();
});
