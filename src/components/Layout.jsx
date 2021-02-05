import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header myName={"Anthony Vergès"} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
