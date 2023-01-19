import axios from 'axios';
import { getSession } from 'next-auth/react';

export const ApiClient = () => {
  const instance = axios.create({
    baseURL: `http://localhost:4444/api`,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  instance.interceptors.request.use(async (request: any) => {
    const session: any = await getSession();

    if (session) {
      request.headers.common = {
        Authorization: `${session.accessToken}`,
      };
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(`error`, error);
    },
  );

  return {
    get: instance.get,
    post: instance.post,
    patch: instance.patch,
    put: instance.put,
    delete: instance.delete,
  };
};

export default ApiClient;
