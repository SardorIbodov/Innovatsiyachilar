import Header from "../components/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="md:max-w-[1240px] mx-auto py-4 px-6">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
