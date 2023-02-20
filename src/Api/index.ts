const BASE_URL = 'https://guiseppe-production.up.railway.app/api/';

export enum EndPoints {
  COFFEE = 'coffee/',
  REGISTER = 'register/',
  USER = 'user/',
  LOGIN = 'login/',
  LOGOUT = 'logout/',
  SET_PICTURE = 'setpicture/',
}

type CreateUserBodyType = {
  name: string;
  email: string;
  password: string;
  secretWord: string;
};

export interface FormDataBody {
  [key: string]: string | Blob;
}

export const API = {
  getUser() {
    return fetch(`${BASE_URL}${EndPoints.USER}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {},
    }).then((response) => response.json());
  },
  createUser(body: CreateUserBodyType) {
    return fetch(`${BASE_URL}${EndPoints.REGISTER}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  },
  loginUser(body: Partial<CreateUserBodyType>) {
    return fetch(`${BASE_URL}${EndPoints.LOGIN}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  },
  logoutUser() {
    return fetch(`${BASE_URL}${EndPoints.LOGOUT}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  },
  updateAvatar(formData: FormData) {
    return fetch(`${BASE_URL}${EndPoints.SET_PICTURE}`, {
      method: 'PUT',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {},
      body: formData,
    }).then((response) => response.json());
  },
};
