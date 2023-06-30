import React from "react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { getToken } from "../../store/actions/login";

const ExchangeToken = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    getToken({ token });
    navigate("/");
  }, [token, navigate]);

  return (
    <div>
      <LoadingSpinner />
    </div>
  );
};

export default ExchangeToken;
