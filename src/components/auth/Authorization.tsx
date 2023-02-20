import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import SignForm from 'components/auth/SignForm';

export type AuthorizationPropsType = {
  className?: string;
};

export type SignType = 'sign-up' | 'login' | 'restore' | 'change-password';
const Authorization = (props: AuthorizationPropsType) => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState<SignType>('login');
  const handleChange = async (event: React.SyntheticEvent, newValue: SignType) => {
    await setValue(newValue);
  };
  return (
    <div className={classNames('sign-wrapper', {}, [props.className])}>
      <h2>{t('authorization')}</h2>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="login" label={t('login')} />
          <Tab value="sign-up" label={t('sign-up')} />
        </Tabs>
      </Box>
      <SignForm typeForm={value} />
      <a
        onClick={async (event) => {
          await setValue('restore');
        }}
      >
        {t('restore')}
      </a>
    </div>
  );
};

export default Authorization;
