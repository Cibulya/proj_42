const BASE_URL = 'https://guiseppe-production.up.railway.app/api/';

export enum EndPoints {
  COFFEE = 'coffee/',
  REGISTER = 'register/',
  USER = 'user/',
  LOGIN = 'login/',
  LOGOUT = 'logout/',
  SET_PICTURE = 'setpicture/',
  RESTORE = 'restore/',
  COFFEE_STATS = 'coffeestat/',
  QUIZ_STATS = 'quiz/',
}

type CreateUserBodyType = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  secretWord: string;
};

interface IUserType {
  activationLink: string;
  coffeeStatus: string;
  email: string;
  isActivated: boolean;
  name: string;
  userImage: string;
  quizStatus: number;
}

export const API = {
  getUser() {
    return fetch(`${BASE_URL}${EndPoints.USER}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {},
    })
      .then((response: Response): Promise<IUserType> => response.json())
      .catch((error: Error) => console.log(error));
  },
  createUser(body: Partial<CreateUserBodyType>) {
    return fetch(`${BASE_URL}${EndPoints.REGISTER}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error: Error) => console.log(error));
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
    })
      .then((response) => response.json())
      .catch((error: Error) => console.log(error));
  },
  logoutUser() {
    return fetch(`${BASE_URL}${EndPoints.LOGOUT}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((error: Error) => console.log(error));
  },
  updateAvatar(formData: FormData) {
    return fetch(`${BASE_URL}${EndPoints.SET_PICTURE}`, {
      method: 'PUT',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {},
      body: formData,
    })
      .then((response) => response.json())
      .catch((error: Error) => console.log(error));
  },
  restoreUser(body: Partial<CreateUserBodyType>) {
    return fetch(`${BASE_URL}${EndPoints.RESTORE}`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error: Error) => console.log(error));
  },
  updateCoffeeStatus(body: Partial<IUserType>) {
    return fetch(`${BASE_URL}${EndPoints.COFFEE_STATS}`, {
      method: 'PUT',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error: Error) => console.log(error));
  },
  updateQuizStatus(body: Partial<IUserType>) {
    return fetch(`${BASE_URL}${EndPoints.QUIZ_STATS}`, {
      method: 'PUT',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error: Error) => console.log(error));
  },
};
