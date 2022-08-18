import customAxios from "axios/axios";

const limit = 20;

export async function getAllContacts(page) {

  const url = `/comments?_page=${page}&_limit=${limit}`;

  const response = await customAxios.get(url);

  return response;

}