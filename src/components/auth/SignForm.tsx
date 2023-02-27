import React, { FormEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputForm from 'components/auth/InputForm';
import { SignType } from 'components/auth/Authorization';
import { API } from 'Api';
import ErrorSpan from 'components/auth/ErrorSpan';

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
  const [error, setError] = useState('');
  const formRef = useRef();
  const checkInputChange = (state: SignState) => {
    setInitialState({ ...state });
    setError('');
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
          }).then((data) => {
            if (data && data.message === 'User created') {
              API.loginUser({
                email: initialState.email,
                password: initialState.password,
              }).then((data) => {
                !data.hasOwnProperty('error')
                  ? ((formRef.current as HTMLDivElement).parentElement.style.display = 'none')
                  : setError(data.error || 'Try again');
              });
            } else {
              setError(data.message || 'Try again');
            }
          });
          break;
        case 'login':
          API.loginUser({
            email: initialState.email,
            password: initialState.password,
          }).then((data) => {
            if (!data.hasOwnProperty('error')) {
              (formRef.current as HTMLDivElement).parentElement.style.display = 'none';
              const authIcon = document.querySelector('.auth-icon');
              const account = document.querySelector('.account');
              account.innerHTML = data.name;
              (authIcon as HTMLElement).style.backgroundImage = `url(${data.userImage})`;
            } else {
              setError(data.error || 'Try again');
            }
          });
          break;
        case 'restore':
          API.restoreUser({
            email: initialState.email,
            newPassword: initialState.password,
            secretWord: initialState.secretWord,
          }).then((data) => {
            if (data.statusCode !== 403) {
              API.loginUser({
                email: initialState.email,
                password: initialState.password,
              }).then((data) => {
                !data.hasOwnProperty('error')
                  ? ((formRef.current as HTMLDivElement).parentElement.style.display = 'none')
                  : setError(data.error || 'Try again');
              });
            } else {
              setError(data.message || 'Try again');
            }
          });
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
    <form ref={formRef} className="form" onSubmit={checkSubmitForm} noValidate>
      {error.length > 0 && <ErrorSpan text={error} />}
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
          {props.typeForm === 'sign-up' ? t('register') : props.typeForm === 'restore' ? t('restore') : t('login')}
        </button>
      </div>
    </form>
  );
};

export default SignForm;
