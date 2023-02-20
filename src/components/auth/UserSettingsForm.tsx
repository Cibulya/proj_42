import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import UserPhotoForm from 'components/auth/UserPhotoForm';

type UserFormPropsType = {
  className?: string;
};

const UserSettingsForm = (props: UserFormPropsType) => {
  const { t } = useTranslation();

  const [value, setValue] = React.useState('one');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={classNames('sign-wrapper', {}, [props.className])}>
      <h2>{t('userSettings')}</h2>
      <Box sx={{ width: '100%' }}>
        <Tabs
          centered={true}
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label={t('changePhoto')} />
        </Tabs>
      </Box>
      <UserPhotoForm />
    </div>
  );
};

export default UserSettingsForm;
