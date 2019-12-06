import React from 'react';
import { render } from '@testing-library/react'
import Players from './Players';

it('Players renders without crashing', () => {
  render(<Players />)
});
