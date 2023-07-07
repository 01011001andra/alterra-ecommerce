import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container-xxl py-4 ">{children}</div>
      <Footer />
    </>
  );
};
