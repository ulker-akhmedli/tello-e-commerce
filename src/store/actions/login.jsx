import { token } from "../../commerce";
import axios from "axios";

const headers = {
  "X-Authorization": token,
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
    const { data: response } = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

export const userRegister = async ({ firstname, lastname, email, phone }) => {
  const url = new URL("https://api.chec.io/v1/customers");
  let body = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
  };
  try {
    const { data: response } = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};


