import React from "react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { commerce } from "../../commerce";
const ExchangeToken = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  //   console.log(token);
  useEffect(() => {
    commerce.customer.getToken(`${token}`).then(() => navigate("/"));
  }, [token, navigate]);
  return (
    <div>
      <LoadingSpinner />
    </div>
  );
};

export default ExchangeToken;
