import axios from "axios";
import { commerce } from "../../commerce";
const headers = {
  "X-Authorization": "sk_47165c63f179ac44fc4e178dca07476d285a5e5c7cf3e",
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const userLogin = async ({ email, baseUrl }) => {
  const url = new URL("https://api.chec.io/v1/customers/email-token");
  try {
    let body = {
      email: email,
      base_url: `${baseUrl}/create-token`,
    };
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
export const userRegister = async ({ firstname, lastname, email, phone }) => {
  const url = new URL("https://api.chec.io/v1/customers");
  let body = {
    firstname,
    lastname,
    email,
    phone,
  };

  try {
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

export const updateUser = async ({ firstname, lastname, email, phone }, id) => {
  try {
    const response = await commerce.customer.update(
      {
        email,
        firstname,
        lastname,
        phone,
      },
      id
    );
    return response;
  } catch (err) {
    return err.message;
  }
};
