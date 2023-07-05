import axios from "axios";

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
export const userRegister = async ({ firstname, lastname, email }) => {
  const url = new URL("https://api.chec.io/v1/customers");
  let body = {
    firstname,
    lastname,
    email,
  };
  console.log(body);
  try {
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

// export const getToken = async ({ token }) => {
//   const url = new URL("https://api.chec.io/v1/customers/exchange-token");
//   try {
//     let body = {
//       token: token,
//     };
//     const response = await axios.post(url, JSON.stringify(body), {
//       headers,
//     });
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return err.message;
//   }
// };

export const logOutUser = async () => {
  try {
    const response = await commerce.customer.logout();
    return response;
  } catch (err) {
    return err.message;
  }
};
