// Create Instance For Base URL (To use it in axios operations).

import axios from "axios";
export const httpAxios = axios.create({
    baseURL: process.env.BASE_URL
  });