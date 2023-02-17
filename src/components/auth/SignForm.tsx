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
  const checkInputChange = (state: SignState) => {
    setInitialState({ ...state });
    console.log(initialState);
  };
  const checkSubmitForm = (event: any) => {
    event.preventDefault();
    let validity = true;
    Object.values(initialState.errors).forEach((val) => val.length > 0 && (validity = false));
    return validity;
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
          <button className="learning__btn">{props.typeForm === 'sign-up' ? t('register') : t('sign-in')}</button>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
