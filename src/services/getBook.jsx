import { clientAxios } from "./axios";

export const getBook = async () => {
  const resp = await clientAxios.get("volumes?q=quilting&maxResults=40");
  const bookList = resp.data.items;
  return bookList;
};
