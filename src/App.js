import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./Pages/catalog";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { StoreProvider } from "./context/StoreContext"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <StoreProvider> {/* Agregamos el StoreProvider */}
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;