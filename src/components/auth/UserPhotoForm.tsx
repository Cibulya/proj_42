import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@mui/material';
import { API, IUserType } from 'Api';
import ErrorSpan from 'components/auth/ErrorSpan';

type UserFormPropsType = {
  className?: string;
  callbackProgress?: (progress: number) => void;
  progress?: number;
  callBackIsOpen?: (isOpen: boolean) => void;
  isOpen: boolean;
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
  const [error, setError] = useState('');
  const [photo, setPhoto] = useState<File>(null);
  const [initialState, setInitialState] = useState<UserDataType>({
    userName: '',
    email: '',
    secretWord: '',
    userImage: '',
    isActivated: false,
  });

  const labelRef = useRef();
  const buttonSubmitRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    API.getUser().then((data: Partial<IUserType>) => {
      if (data.name) {
        setInitialState({
          ...initialState,
          email: data.email,
          userName: data.name,
          userImage: data.userImage,
          isActivated: data.isActivated,
        });
        if (!data.isActivated) {
          (labelRef.current as HTMLLabelElement).textContent = `${t('activate')}`;
        }
      } else {
        (labelRef.current as HTMLLabelElement).textContent = `${t('login-reload')}`;
      }
    });
  }, [setPhoto]);

  const checkSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('userImage', photo);
    formData.append('email', initialState.email);
    API.updateAvatar(formData).then((data) => {
      setInitialState({
        ...initialState,
        userImage: data,
      });
      const authIcon = document.querySelector('.auth-icon');
      (authIcon as HTMLElement).style.backgroundImage = `url(${data})`;
    });
    fileInput.current.value = '';
    setPhoto(null);
    (buttonSubmitRef.current as HTMLButtonElement).disabled = Boolean(true);
  };

  const selectPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (!initialState.isActivated) {
      API.getUser().then((data: Partial<IUserType>) => {
        if (data.name) {
          setInitialState({
            ...initialState,
            email: data.email,
            userName: data.name,
            userImage: data.userImage,
            isActivated: data.isActivated,
          });
          if (!data.isActivated) {
            (labelRef.current as HTMLLabelElement).textContent = `${t('activate')}`;
          } else {
            (labelRef.current as HTMLLabelElement).textContent = `${t('add-file')}`;
          }
        } else {
          (labelRef.current as HTMLLabelElement).textContent = `${t('login-reload')}`;
        }
      });
    } else {
      const fileList = e.target.files;
      if (!fileList) return;
      const file = fileList[0];
      if (
        (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') &&
        file.size / 1024 < 512
      ) {
        setPhoto(file);
        setInitialState({
          ...initialState,
          userImage: URL.createObjectURL(file),
        });
        (buttonSubmitRef.current as HTMLButtonElement).disabled = Boolean(!initialState.email);
        setError('');
      } else {
        e.target.files = null;
        fileInput.current.value = '';
        setPhoto(null);
        setError(`${t('loadImg')}`);
      }
    }
  };
  const closeHandler = () => {
    props.callBackIsOpen(false);
    props.callbackProgress(props.progress + 1);
  };
  return (
    <form ref={formRef} className="form" onSubmit={checkSubmitForm} noValidate>
      <Avatar alt={t('userPhoto')} src={initialState.userImage} sx={{ width: 72, height: 72 }} />
      <h3>{initialState.userName}</h3>
      <label ref={labelRef} className="label label-file" htmlFor="file">
        {t('add-file')}
      </label>
      <input ref={fileInput} id="file" className="input input-file" type="file" name="file" onChange={selectPhoto} />
      {error.length > 0 && <ErrorSpan text={error} />}
      <div className="submit">
        <button ref={buttonSubmitRef} className="learning__btn" disabled>
          {t('save')}
        </button>
        <button className="learning__btn" onClick={closeHandler}>
          {t('closePhoto')}
        </button>
      </div>
    </form>
  );
};

export default UserPhotoForm;
