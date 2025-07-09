import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interfaces";
import Promotion from "../common/Promotion";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Promotion />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
