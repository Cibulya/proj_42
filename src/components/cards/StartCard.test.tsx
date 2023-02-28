import { screen } from '@testing-library/react';
import StartCard from 'components/cards/StartCard';
import React from 'react';
import { renderWithTranslation } from 'helpers/tests/renderWithTranslation';
import { MemoryRouter as Router } from 'react-router-dom';

describe('StartCard', () => {
  test('Test StartCard by LinkTitle PauseMode', () => {
    renderWithTranslation(
      <Router>
        <StartCard to={'/pause'} linkTitle={'Pause Mode'}></StartCard>
      </Router>
    );
    expect(screen.getByText('Pause Mode')).toBeInTheDocument();
  });
  test('Test StartCard with LinkTitle Learning Mode', () => {
    renderWithTranslation(
      <Router>
        <StartCard to={'/learning'} linkTitle={'Learning Mode'}></StartCard>
      </Router>
    );
    expect(screen.getByText('Learning Mode')).toBeInTheDocument();
  });
});
