import React from 'react';
import Authorization from 'components/auth/Authorization';
import UserSettingsForm from 'components/auth/UserSettingsForm';

const AuthPage = () => {

  const background = document.querySelector('.app');
  background.classList.remove('main');
  background.classList.remove('table');
	background.classList.add('chip')

  return (
    <div className="learning-mode">
      <Authorization className={'card'} />
      <UserSettingsForm className={'card'} />
    </div>
  );
};

export default AuthPage;
