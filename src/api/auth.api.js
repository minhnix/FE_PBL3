import { axios } from "./config";

export const signUp = async (body) => {
  const data = await axios
    .post("auth/signup", body)
    .then((response) => response.data)
    .catch((err) => {
      return err.response;
    });
  return data;
};
