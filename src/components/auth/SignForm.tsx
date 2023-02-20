import React, { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputForm from 'components/auth/InputForm';
import { SignType } from 'components/auth/Authorization';
import { API } from 'Api';

export type ErrorsStateType = {
  username: string;
  email: string;
  password: string;
  secretWord: string;
};

export interface SignState {
  username: string;
  email: string;
  password: string;
  secretWord: string;
  errors: ErrorsStateType;
}

export type SignFormPropsType = {
  className?: string;
  typeForm: SignType;
};
const SignForm = (props: SignFormPropsType) => {
  const { t } = useTranslation();

  const [initialState, setInitialState] = useState<SignState>({
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
  });
  const checkInputChange = (state: SignState) => {
    setInitialState({ ...state });
  };
  const checkSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let validity = true;
    Object.values(initialState.errors).forEach((val) => val.length > 0 && (validity = false));
    if (validity) {
      switch (props.typeForm) {
        case 'sign-up':
          API.createUser({
            name: initialState.username,
            email: initialState.email,
            password: initialState.password,
            secretWord: initialState.secretWord,
          }).then((data) => console.log(data));
          break;
        case 'login':
          API.loginUser({
            email: initialState.email,
            password: initialState.password,
          }).then((data) => console.log(data));
          break;
        case 'restore':
          break;
        case 'change-password':
          break;
        default:
          break;
      }
      setInitialState({
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
      });
    }
  };

  return (
    <form className="form" onSubmit={checkSubmitForm} noValidate>
      {props.typeForm === 'login' && (
        <>
          <InputForm type={'email'} checkInputChange={checkInputChange} initialState={initialState} />
          <InputForm type={'password'} checkInputChange={checkInputChange} initialState={initialState} />
        </>
      )}
      {props.typeForm === 'sign-up' && (
        <>
          <InputForm type={'username'} checkInputChange={checkInputChange} initialState={initialState} />
          <InputForm type={'email'} checkInputChange={checkInputChange} initialState={initialState} />
          <InputForm type={'password'} checkInputChange={checkInputChange} initialState={initialState} />
          <InputForm type={'secretWord'} checkInputChange={checkInputChange} initialState={initialState} />
        </>
      )}
      {props.typeForm === 'restore' && (
        <>
          <InputForm type={'email'} checkInputChange={checkInputChange} initialState={initialState} />
          <InputForm type={'secretWord'} checkInputChange={checkInputChange} initialState={initialState} />
          <InputForm type={'password'} checkInputChange={checkInputChange} initialState={initialState} />
        </>
      )}

      <div className="submit">
        <button className="learning__btn">
          {props.typeForm === 'sign-up'
            ? t('register')
            : props.typeForm === 'restore'
            ? t('restore')
            : props.typeForm === 'change-password'
            ? t('save')
            : t('login')}
        </button>
      </div>
    </form>
  );
};

export default SignForm;
