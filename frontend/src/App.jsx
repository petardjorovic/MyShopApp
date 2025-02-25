import axios from "axios";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterComponent from "./components/FooterComponent";
import ScrollToTopComponent from "./components/ScrollToTopComponent";

// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <div>
      <ScrollToTopComponent />
      <NavbarComponent />
      <Outlet />
      <ToastContainer />
      {/* //TODO: Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;
