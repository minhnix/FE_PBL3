import axioz from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

export const axios = axioz.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
