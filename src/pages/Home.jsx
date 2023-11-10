import { useState } from "react";
import Login from "./Login";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";

const Home = () => {
  const [login, setLogin] = useState("login");

  return (
    <>
      <div className="flex items-center md:justify-between md:flex-row-reverse flex-col">
        <div className="main__left">
          <h1 className="font-bold xl:text-[30px] lg:text-lg text-center mb-4">
            Save your💡 <br /> Electrictiy Consumption
          </h1>
          {login === "login" ? (
            <Login setLogin={setLogin} />
          ) : (
            <SignIn setLogin={setLogin} />
          )}
        </div>

        <div className="main__right ">
          <img
            src="https://plus.unsplash.com/premium_photo-1679502560137-a769caba5880?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2F2aW5nJTIwZW5lcmd5fGVufDB8fDB8fHww"
            alt="TUIT MainGate image"
            loading="lazy"
            className="md:w-[400px] xl:w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
