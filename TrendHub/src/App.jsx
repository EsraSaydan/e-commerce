import "./App.css";
import "./index.css";
import Footer from "./layout/Footer";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import PageContent from "./layout/PageContent";
import Navbar from "./components/home/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
