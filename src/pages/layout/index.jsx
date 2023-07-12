import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const Layout = ({ children, classname }) => {
  return (
    <>
      <Navbar />
      <div className={`container-xxl px-4 py-5 ${classname}`}>{children}</div>
      <Footer />
    </>
  );
};
