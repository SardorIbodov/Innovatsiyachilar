import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Admission from "../pages/Amission";
import { useEffect, useState } from "react";

function Router() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // Local storage o'zgarga ekanligini tekshiramiz
    const storedToken = localStorage.getItem("token");

    // O'zgarib bo'lgan tokenni yangilashimiz kerak
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, []);

  return createBrowserRouter(
    token
      ? [
          {
            path: "/admission",
            element: (
              <RootLayout>
                <Admission />
              </RootLayout>
            ),
          },
        ]
      : [
          {
            path: "/",
            element: (
              <RootLayout>
                <Home />
              </RootLayout>
            ),
          },
        ]
  );
}

export default Router;
