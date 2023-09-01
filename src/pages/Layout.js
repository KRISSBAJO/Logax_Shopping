import { Header } from "../components";
import Footer from '../components/Footer';

export default function Layout ({ children })  {
    return (
      <div className="layout-container">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </div>
    );
  };
  