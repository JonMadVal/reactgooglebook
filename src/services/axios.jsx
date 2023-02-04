import axios from "axios";

export const clientAxios = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});
