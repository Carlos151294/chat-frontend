import "./index.css";
import Main from "./Main";
import Navbar from "./Navbar";
import SiderBar from "./Sidebar";
import Footer from "./Footer";

const MessagesPage = () => (
  <div className="container">
    <SiderBar />
    <Navbar />
    <Main />
    <Footer />
  </div>
);

export default MessagesPage;
