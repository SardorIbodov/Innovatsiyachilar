import { useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";

const Home = () => {
  const [login, setLogin] = useState("login");

  return (
    <>
      <div className="flex items-center md:flex-row  flex-col">
        <div className="main__left w-2/3">
          <img
            src="./imgs/main_img.jpg"
            alt="Electricity Consumption main Image"
            loading="lazy"
            className="max-w-full object-cover h-screen"
          />
        </div>
        <div className="main__right max-w-[30%] mx-auto">
          <h1 className="font-bold xl:text-[30px] lg:text-lg text-center mb-4">
            Save your💡 <br /> Electrictiy Consumption
          </h1>
          {login === "login" ? (
            <Login setLogin={setLogin} />
          ) : (
            <SignIn setLogin={setLogin} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
