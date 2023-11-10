import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import RootLayout from "./layout/RootLayout";
import Admission from "./pages/Amission";
import Home from "./pages/Home";

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
          path="/admission"
          element={
            <RootLayout>
              <Admission />
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
