import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Players from "./pages/Players";
import axios from "axios";
import { Outlet } from "react-router-dom";

function App() {




  return (
    <div className="">
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
