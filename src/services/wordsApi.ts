import { api } from './api';

export const setTokenApi = (token: string): void => {
  api.defaults.headers.common['Authorization'] = token;
};

export const getWordsCategoriesApi = async (
  token: string
): Promise<string[]> => {
  const { data } = await api<string[]>('/words/categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// export const addContactApi = async contact => {
//   const { data } = await api.post('/contacts', contact);
//   console.log(data);
//   return data;
// };

// export const delContactApi = async delId => {
//   const { data } = await api.delete(`/contacts/${delId}`);
//   return data;
// };
