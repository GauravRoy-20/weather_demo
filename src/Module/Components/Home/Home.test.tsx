import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders without errors', () => {
    render(<Home />);
  });

  test('updates searchQuery state on search form input change', async () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(
      'Enter location',
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'New York' } });

    await waitFor(() => expect(input?.value).toBe('New York'));
  });
});
