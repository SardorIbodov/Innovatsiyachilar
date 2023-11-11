import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import { useEffect, useState } from "react";
import Details from "../pages/Details";
import Results from "../pages/Results";

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
            path: "/details",
            element: (
              <RootLayout>
                <Details />
              </RootLayout>
            ),
          },

          {
            path: "/results/:id",
            element: (
              <RootLayout>
                <Results />
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
