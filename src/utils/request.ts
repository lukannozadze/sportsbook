import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios";

export const client = (() => {
  return axios.create({
    baseURL: import.meta.env.VITE_REQUEST_PUBLIC_URL,
    headers: {
      Accept: "application/json, text/plain, */*",
    },
  });
})();

const request = async (options: AxiosRequestConfig) => {
  const onSuccess = async (response: AxiosResponse) => {
    const  data = await JSON.parse(response.data as string);
    return data;
  };

  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    });
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;