import axios from "axios";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <ToastContainer />
      {/* //TODO: Footer */}
    </div>
  );
}

export default App;
