import React from 'react';
import { render } from '@testing-library/react'
import Dashboard from './Dashboard';

it('dashboard renders without crashing', () => {
  render(<Dashboard />)
});
