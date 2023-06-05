import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingSpinner.scss"
import Spinner from "../../assets/laoding-spinner.gif";

const LoadingSpinner = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  if (count >= 1) {
    navigate("/error");
  }
  return <img className="loadingIcon" src={Spinner} alt="Loading..." />;
};

export default LoadingSpinner;
