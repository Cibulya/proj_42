import React from 'react';
import SignForm from 'components/auth/SignForm';

const AuthPage = () => {
  return (
    <div className="learning-mode">
      <SignForm className={'card'} typeForm={'sign-up'} />
      <SignForm className={'card'} typeForm={'sign-in'} />
    </div>
  );
};

export default AuthPage;
