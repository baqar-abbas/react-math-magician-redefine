import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

test('renders the Calculator component', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});
