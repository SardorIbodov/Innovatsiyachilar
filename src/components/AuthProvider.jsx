import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../react-query/query";
import AppLoader from "./AppLoader";

const AuthProvider = ({ children }) => {
  const [isInitilized, setIsInitilized] = useState(false);
  useEffect(() => {
    async function handleAuth() {
      const token = await localStorage.getItem("token");
      if (token && token != null) {
        axios
          .get(`${BASE_URL}/user/user/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            if (window.location.pathname != "/details") {
              window.location.pathname = "/details";
            }
            // console.log(res);
            // console.log("email: " + res.data.email);
            // console.log("username: " + res.data.full_name);
            setIsInitilized(true);
          })
          .catch((err) => {
            setIsInitilized(true);
            if (window.location.pathname != "/") window.location.pathname = "/";
          });
      } else {
        setIsInitilized(true);
        if (window.location.pathname != "/") window.location.pathname = "/";
      }
    }
    if (!isInitilized) {
      handleAuth();
    }
  }, []);
  if (isInitilized) {
    return <>{children}</>;
  } else {
    return <AppLoader />;
  }
};

export default AuthProvider;
