import { apiService } from './api';

export const postLoginUser = async ({ userName, password }) => {
  const data = await apiService.post('method/login', {
    usr: userName,
    pwd: password,
  });
  return data;
};
