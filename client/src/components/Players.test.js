import React from 'react';
import { render } from '@testing-library/react'
import Players from './Players';

it('Players renders without crashing', () => {
  render(<Players />)
});

it('Players renders elements without crashing', () => {
  const person = [
    {
      name: 'hui'
    }
  ]

  const players = render(<Players players={person} />)

  players.getByText(/add to favorites!/i)
})