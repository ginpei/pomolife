import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  expect(() => {
    render(<App />);
  }).not.toThrow();
});
