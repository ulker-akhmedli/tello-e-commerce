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

export const userRegister = async ({ name, email, phone }) => {
  const url = new URL("https://api.chec.io/v1/customers");
  let body = {
    name: name,
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

export const getToken = async ({ token }) => {
  const url = new URL("https://api.chec.io/v1/customers/exchange-token");
  try {
    let body = {
      token: token,
    };
    const { data: response } = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

// export const getUser = async ({ id }) => {
//   const url = new URL(`https://api.chec.io/v1/customers/${id}`);
//   try {
//     const { data: response } = await axios.get(url, { headers });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return err.message;
//   }
// };

export const getUser = async ({ setLoading, setUser }) => {
  try {
    setLoading(false);
    const response = await commerce.customer.about();
    setUser(response);
    setLoading(true);
    return response;
  } catch (err) {
    return err.message;
  }
};

export const logOutUser = async () => {
  try {
    const response = await commerce.customer.logout();
    return response;
  } catch (err) {
    return err.message;
  }
};
