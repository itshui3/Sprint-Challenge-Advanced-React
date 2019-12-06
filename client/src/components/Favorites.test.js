import React from 'react';
import { render } from '@testing-library/react'
import Favorites from './Favorites';

it('Favorites renders without crashing', () => {
  render(<Favorites />)
});
