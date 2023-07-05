import Navbar from '../../components/navbar';
import Footer from '../../components/footer';


export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}
