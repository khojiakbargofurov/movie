import axios from "axios";

export const inctance = axios.create({
  baseURL: 'https://api.kinopoisk.dev',
})

export default inctance;
