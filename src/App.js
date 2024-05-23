import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Store from "./components/Store";
import About from "./components/About";
import data from "./Data";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<MainContainer bestsell={data}></MainContainer>}
        ></Route>
        <Route path="/Store" element={<Store storedata={data}></Store>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route
          path="/Contact"
          element={
            <h1>
              <Contact></Contact>
            </h1>
          }
        ></Route>
        <Route
          path="/Store/:Productid"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
