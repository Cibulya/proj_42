import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'helpers/tests/renderWithTranslation';
import InputForm from './InputForm';
import { SignState } from './SignForm';

describe('InputForm', () => {
  const initialState: SignState = {
    username: '',
    email: '',
    password: '',
    secretWord: '',
    errors: {
      username: '',
      email: '',
      password: '',
      secretWord: '',
    },
  };
  test('Test InputForm with label text password', () => {
    renderWithTranslation(<InputForm type={'password'} checkInputChange={() => {}} initialState={initialState} />);
    expect(screen.getByText('password')).toBeInTheDocument();
  });
  test('Test InputForm with label text username', () => {
    renderWithTranslation(<InputForm type={'username'} checkInputChange={() => {}} initialState={initialState} />);
    expect(screen.getByText('username')).toBeInTheDocument();
  });
});
