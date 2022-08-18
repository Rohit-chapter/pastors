import axios from "axios";

const serverURL = 'https://jsonplaceholder.typicode.com';

const customAxios = axios.create({
  baseURL: serverURL
});

const requestHandler = (request) => {

  // const accessToken = process.env.REACT_APP_SERVER_ACCESS_TOKEN;

  // if (accessToken !== null) {
  //   request.headers['Authorization'] = 'Bearer ' + accessToken;
  // }

  return request;

};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {

  // eslint-disable-next-line no-console
  console.log(error.response.data, "Server Interaction error");

  return error;

};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
