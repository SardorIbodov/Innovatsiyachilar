import Header from "../components/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="w-full">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
