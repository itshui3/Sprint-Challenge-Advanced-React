import React from 'react';
import { render } from '@testing-library/react'
import Dashboard from './Dashboard';

it('dashboard renders without crashing', () => {
  render(<Dashboard />)
});

it('dashboard renders elements without crashing', () => {
  const dashboard = render(<Dashboard />)

  dashboard.getByText(/welcome to the 2019 women\'s world cup!/i)
  dashboard.getByText(/see favorited players/i)
  dashboard.getByText(/see all players/i)
})
