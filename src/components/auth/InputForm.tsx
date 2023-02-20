import React, { ChangeEvent } from 'react';
import ErrorSpan from 'components/auth/ErrorSpan';
import { useTranslation } from 'react-i18next';
import { SignState } from 'components/auth/SignForm';

export type InputType = 'username' | 'email' | 'password' | 'secretWord';

type InputFormPropsType = {
  type: InputType;
  checkInputChange: (state: SignState) => void;
  initialState: SignState;
};

const RegexEmail = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
const RegexPassword = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/);

const InputForm = (props: InputFormPropsType) => {
  const { t } = useTranslation();
  const checkInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        props.initialState.errors.username = value.length < 5 ? 'Username must be 5 characters long!' : '';
        break;
      case 'email':
        props.initialState.errors.email = RegexEmail.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        props.initialState.errors.password =  value.length > 5
          ? ''
          : 'Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        break;
      case 'secretWord':
        props.initialState.errors.secretWord = value.length < 5 ? 'Secret word must be 5 characters long!' : '';
        break;
      default:
        break;
    }
    const state = {
      ...props.initialState,
      [name]: value,
    };
    props.checkInputChange(state);
  };

  return (
    <div className={props.type === 'secretWord' ? 'username' : props.type}>
      <label className="label" htmlFor={props.type}>
        {t(`${props.type}`)}
      </label>
      <input
        className="input"
        type={props.type === 'password' ? 'password' : 'text'}
        name={props.type}
        onChange={checkInputChange}
      />
      {props.initialState.errors[`${props.type}`].length > 0 && (
        <ErrorSpan text={props.initialState.errors[props.type]} />
      )}
    </div>
  );
};

export default InputForm;
