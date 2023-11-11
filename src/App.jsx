import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import RootLayout from "./layout/RootLayout";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Results from "./pages/Results";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // Local storage o'zgarga ekanligini tekshiramiz
    const storedToken = localStorage.getItem("token");

    // O'zgarib bo'lgan tokenni yangilashimiz kerak
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* {token ? ( */}
        <Route
          path="/details"
          element={
            <RootLayout>
              <Details />
            </RootLayout>
          }
        />
        <Route
          path="/results/:id"
          element={
            <RootLayout>
              <Results />
            </RootLayout>
          }
        />
        {/* ) : ( */}
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        {/* )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
