import React from 'react';
import { render } from '@testing-library/react'
import Favorites from './Favorites';

it('Favorites renders without crashing', () => {
  render(<Favorites />)
});

it('Favorites renders elements without crashing', () => {
  const faves = [
    {
      name: 'Hui',
      country: 'Panda-Land'
    }
  ]

  const favorites = render(<Favorites favorites={faves} />)

  favorites.getByText(/remove favorite/i)
})