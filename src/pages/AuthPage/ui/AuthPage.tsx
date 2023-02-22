import React from 'react';
import Authorization from 'components/auth/Authorization';
import UserSettingsForm from 'components/auth/UserSettingsForm';

const AuthPage = () => {
  return (
    <div className="learning-mode">
      <Authorization className={'card'} />
      <UserSettingsForm className={'card'} />
    </div>
  );
};

export default AuthPage;
