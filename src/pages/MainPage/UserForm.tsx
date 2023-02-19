import { Avatar } from '@mui/material';
import { classNames } from 'helpers/classNames/classNames';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type UserFormPropsType = {
  className?: string;
  username?: string;
};
const UserForm = (props: UserFormPropsType) => {
  const { t } = useTranslation();
  const [photo, setPhoto] = useState<File>();
  const [urlPhoto, setUrlPhoto] = useState('');

  useEffect(() => {
    fetch('http://localhost:7000/api/login', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      //origin: 'https://guiseppe-production.up.railway.app/',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'cibulyadev@gmail.com',
        password: 'passsword',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUrlPhoto(data.userImage);
      });
  });
  const checkSubmitForm = (event: any) => {
    const formData = new FormData();
    formData.append('userImage', photo);
    formData.append('email', 'cibulyadev@gmail.com');
    console.log(formData.get('userImage'));
    event.preventDefault();
    fetch('https://guiseppe-production.up.railway.app/api/setpicture', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {},
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  const savePhoto = () => {};
  const selectPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    setPhoto(fileList[0]);
  };
  return (
    <div className={classNames('sign-wrapper', {}, [props.className])}>
      <h2>{t('user')}</h2>
      <form className="form" onSubmit={checkSubmitForm} noValidate>
        <Avatar alt={props.username || 'user'} src={urlPhoto} sx={{ width: 56, height: 56 }} />
        <label className="label" htmlFor="file">
          {t('add-file')}
        </label>
        <input className="input" type="file" name="file" onChange={selectPhoto} />
        <div className="submit">
          <button className="learning__btn">{t('save')}</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
