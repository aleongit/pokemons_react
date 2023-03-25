import { Navbar } from "../Navbar/navbar";
import { Footer } from "../Footer/footer";

type LayoutProps = {
  children: React.ReactNode;
};

//export function Layout({ children}: LayoutProps) {
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
//export default Layout;
