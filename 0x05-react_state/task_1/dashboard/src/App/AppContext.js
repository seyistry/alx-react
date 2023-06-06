import { createContext } from 'react';

export const data = {
  email: '',
  password: '',
  isLoggedIn: false,
};
export function logOut() {}
export const AppContext = createContext(data);
