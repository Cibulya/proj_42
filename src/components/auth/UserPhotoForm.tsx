import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@mui/material';
import { API } from 'Api';

type UserFormPropsType = {
  className?: string;
};

export type UserDataType = {
  userName: string;
  email: string;
  secretWord: string;
  userImage: string;
  isActivated: boolean;
};
const UserPhotoForm = (props: UserFormPropsType) => {
  const { t } = useTranslation();
  const fileInput = useRef(null);

  const [photo, setPhoto] = useState<File>(null);
  const [initialState, setInitialState] = useState<UserDataType>({
    userName: '',
    email: '',
    secretWord: '',
    userImage: '',
    isActivated: false,
  });

  useEffect(() => {
    API.getUser().then((data) => {
      console.log(data);
      setInitialState({
        ...initialState,
        email: data.email,
        userName: data.name,
        userImage: data.userImage,
        isActivated: data.isActivated,
      });
    });
  }, []);

  const checkSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('userImage', photo);
    formData.append('email', initialState.email);
    if (initialState.isActivated) {
      API.updateAvatar(formData).then((data) => {
        setInitialState({
          ...initialState,
          userImage: data,
        });
      });
      fileInput.current.value = '';
      setPhoto(null);
    }
  };

  const selectPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(initialState);
    debugger;
    const fileList = e.target.files;
    if (!fileList) return;
    const file = fileList[0];
    if (
      file.type === 'image/png' ||
      file.type === 'image/jpeg' ||
      (file.type === 'image/jpg' && file.size / 1024 < 20)
    ) {
      setPhoto(file);
      setInitialState({
        ...initialState,
        userImage: URL.createObjectURL(file),
      });
    }
  };

  return (
    <form className="form" onSubmit={checkSubmitForm} noValidate>
      <Avatar alt={t('userPhoto')} src={initialState.userImage} sx={{ width: 72, height: 72 }} />
      <label className="label label-file" htmlFor="file">
        {t('add-file')}
      </label>
      <input ref={fileInput} id="file" className="input input-file" type="file" name="file" onChange={selectPhoto} />
      <div className="submit">
        <button className="learning__btn">{t('save')}</button>
      </div>
    </form>
  );
};

export default UserPhotoForm;
