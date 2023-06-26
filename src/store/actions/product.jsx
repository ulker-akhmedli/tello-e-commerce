import { token } from "../../commerce";
import axios from "axios";

const headers = {
  "X-Authorization": token,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getProducts = async (setLoading, setProducts, params) => {
  const url = new URL("https://api.chec.io/v1/products");
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  try {
    setLoading(true);
    const { data: response } = await axios.get(url, { headers });
    setProducts(response.data);
    setLoading(false);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
export const getProductsBySlug = async (setLoading, setProducts, params) => {
  const url = new URL("https://api.chec.io/v1/products");
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  try {
    setLoading(true);
    const { data: response } = await axios.get(url, { headers });
    setProducts(response);
    setLoading(false);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

// export const getProductById = async (setLoading, setProduct, id) => {
//   const url = new URL(`https://api.chec.io/v1/products/${id}`);
//   const params = {
//     type: "id",
//   };
//   Object.keys(params).forEach((key) =>
//     url.searchParams.append(key, params[key])
//   );
//   try {
//     setLoading(true);
//     const { data: response } = await axios.get(url, { headers });
//     setProduct(response);
//     setLoading(false);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return err.message;
//   }
// };
export const getProductById = async (setLoading, setProduct, id) => {
  const urlProduct = `https://api.chec.io/v1/products/${id}`;
  const urlListVariant = `https://api.chec.io/v1/products/${id}/variants`;
  try {
    setLoading(true);
    //!
    const { data: product } = await axios.get(urlProduct, {
      headers,
    });
    const { data: variantList } = await axios.get(urlListVariant, {
      headers,
    });
    //!
    setProduct({
      data: product,
      variantList: variantList.data,
    });
    setLoading(false);
    return "success";
  } catch (err) {
    setLoading(false);
    return err.message;
  }
};
