import React, { useState } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import InputForm from 'components/auth/InputForm';

export type ErrorsStateType = {
  username?: string;
  email: string;
  password: string;
};

export interface SignState {
  username?: string;
  email: string;
  password: string;
  errors: ErrorsStateType;
}
export type SignFormPropsType = {
  className: string;
  typeForm: SignForm;
};
export type SignForm = 'sign-up' | 'sign-in';
const SignForm = (props: SignFormPropsType) => {
  const [initialState, setInitialState] = useState<SignState>({
    username: '',
    email: '',
    password: '',
    errors: {
      username: '',
      email: '',
      password: '',
    },
  });

  const { t } = useTranslation();
  const checkInputChange = async (state: SignState) => {
    await setInitialState({ ...state });
  };
  const checkSubmitForm = (event: any) => {
    console.log(initialState);
    event.preventDefault();
    let validity = true;
    Object.values(initialState.errors).forEach((val) => val.length > 0 && (validity = false));
    return true;
  };


  return (
    <div className={classNames('sign-wrapper', {}, [props.className])}>
      <h2>{t(`${props.typeForm}`)}</h2>
      <form className="form" onSubmit={checkSubmitForm} noValidate>
        {props.typeForm === 'sign-up' && (
          <InputForm type={'username'} checkInputChange={checkInputChange} initialState={initialState} />
        )}
        <InputForm type={'email'} checkInputChange={checkInputChange} initialState={initialState} />
        <InputForm type={'password'} checkInputChange={checkInputChange} initialState={initialState} />
        <div className="submit">
          <button onClick={() => fetchDataReg(initialState.username, initialState.password, initialState.email)} className="learning__btn">{props.typeForm === 'sign-up' ? t('register') : t('sign-in')}</button>
        </div>
      </form>
    </div>
  );
};
async function fetchDataLogin(password: string, email: string) {
  await fetch('https://guiseppe-production.up.railway.app/api/login', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    //origin: 'https://guiseppe-production.up.railway.app/',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    "password": password,
    "email": email
})
}).then((response) => response.json()).then((data) => console.log(data))
}

async function fetchDataReg(username: string, password: string, email: string) {
  await fetch('https://guiseppe-production.up.railway.app/api/register', {
    method: 'POST',
    cache: 'force-cache',
    credentials: 'include',
    mode: 'cors',
    //origin: 'https://guiseppe-production.up.railway.app/',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    "name": username,
    "password": password,
    "email": email
})
}).then((response) => response.json()).then((data) => console.log(data))
}
export default SignForm;
