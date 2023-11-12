import { useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import "./custom.css";

const Home = () => {
  const [login, setLogin] = useState("login");

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted preload="auto">
          <source src="bg_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col items-end justify-center">
        <div className="w-2/5 flex flex-col justify-start">
          <h1 className="font-bold font-Roboto md:text-[30px] mb-4 text-white">
            Illuminate Your Life, <br /> Conserve Our Planet
          </h1>
          <div className="w-1/2">
            {login === "login" ? (
              <Login setLogin={setLogin} />
            ) : (
              <SignIn setLogin={setLogin} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
